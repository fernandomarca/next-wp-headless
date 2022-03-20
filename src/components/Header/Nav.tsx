import { Stack } from "@chakra-ui/react";
import { NavLink } from "./NavLink";

type NavProps = {
  direction: "row" | "column";
};

export function Nav({ direction }: NavProps) {
  return (
    <Stack direction={direction} spacing="4" fontWeight="bold">
      <NavLink href="/" title="HOME" />
      <NavLink href="/empresa" title="EMPRESA" />
      <NavLink href="/projetos" title="PROJETOS" />
      <NavLink href="/clientes" title="CLIENTES" />
      <NavLink href="/servicos" title="SERVIÇOS" />
      <NavLink href="/contato" title="CONTATO" />
    </Stack>
  );
}
