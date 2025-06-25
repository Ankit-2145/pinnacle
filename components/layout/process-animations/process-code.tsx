"use client";

import { CodeBlock, CodeBlockCode } from "@/components/ui/code-editor";

export const CodeBlockWithHeader = () => {
  const code = `"use client";

import { SignInButton } from "@/auth/sign";

export const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <SignInButton mode="modal">
        <button className="bg-black text-white px-4 py-2 rounded">
          Sign In
        </button>
      </SignInButton>
      <UserButton/>
    </div>
)};
`;

  return (
    <div className="w-full mt-4">
      <CodeBlock>
        <CodeBlockCode code={code} language="tsx" />
      </CodeBlock>
    </div>
  );
};
