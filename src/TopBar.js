import { Container } from "@mui/material";
import BreadcrumbsIconed from "./BreadcrumbsIconed";
export default function TopBar() {
  return (
    <div className="flex flex-row justify-between items-center bg-white">
      <Container maxWidth="false" className="border border-b-separator-gray">
        <BreadcrumbsIconed />
      </Container>
    </div>
  );
}
