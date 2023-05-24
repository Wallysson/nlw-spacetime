export function EmptyMemories() {
  return (
    <div className="flex flex-1 items-center justify-center p-16 ">
      <p className="text-center leading-relaxed w-[360px]">
        Você ainda não registrou nenhuma lembrança, começe a{" "}
        <a
          href="/memories/new"
          rel="noreferrer"
          className="underline hover:text-gray-50"
        >
          criar agora
        </a>
        !
      </p>
    </div>
  );
}
