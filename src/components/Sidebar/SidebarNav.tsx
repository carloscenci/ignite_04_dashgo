import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
    return (
        <Stack spacing="12" align="flex-start">
            <NavSection title="GERAL">
                <NavLink icon={RiDashboardLine} route="/dashboard" children="Dashboard" />
                <NavLink icon={RiContactsLine} route="/users" children="Usuários" />
            </NavSection>
            <NavSection title="AUTOMAÇÃO">
                <NavLink icon={RiDashboardLine} route="/forms" children="Formulários" />
                <NavLink icon={RiInputMethodLine} route="/automation" children="Automação" />
            </NavSection>
        </Stack>
    )
}