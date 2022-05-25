import { useRouter } from "next/router";
import { ReactNode, useState } from "react";
import {
  Content,
  MenuItem,
  OpenMenu,
  Overlay,
  Sidebar,
  Wrapper,
} from "./Layout.styles";

const Layout = ({ children }: { children: ReactNode }) => {
  const [isSidebarActive, setIsSidebarActive] = useState<boolean>(false);
  const router = useRouter();
  return (
    <Wrapper>
      <Sidebar>
        <MenuItem onClick={() => setIsSidebarActive(!isSidebarActive)}>
          menu
        </MenuItem>
        {!isSidebarActive ? null : (
          <Overlay>
            <OpenMenu>
              <MenuItem onClick={() => router.push("/")}>Home</MenuItem>
              <MenuItem onClick={() => router.push("/lorem")}>
                Lorem Ipsum
              </MenuItem>
              <MenuItem onClick={() => router.push("/storage")}>
                Storage
              </MenuItem>
            </OpenMenu>
          </Overlay>
        )}
      </Sidebar>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Layout;
