

import { AuthUser } from "@repo/types";







export async function loginUser(
  data: LoginDTO,
  deviceInfo: DeviceInfo
): Promise<AuthTokens & { user: Omit<User, 'password'> }> {
  const user = await User.findOne({ email: data.email });
  if (!user) throw new AppError('Credenciales inválidas', 401);

  const isValid = await comparePassword(data.password, user.password);
  if (!isValid) throw new AppError('Credenciales inválidas', 401);

  const accessToken = generateAccessToken({ userId: user.id, role: user.role });
  const refreshToken = generateRefreshToken({ userId: user.id, role: user.role });

  await createSession(user.id, refreshToken, deviceInfo);

  const { password, ...safeUser } = user;
  return { accessToken, refreshToken, user: safeUser };
}