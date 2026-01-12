import { VerifyMainView } from "./components";

interface IProps {
  searchParams: Promise<{ email: string | undefined }>;
}

export default async function SignUp({ searchParams }: IProps) {
  const { email } = await searchParams;

  return <VerifyMainView email={email} />;
}
