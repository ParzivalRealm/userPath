import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import SettingsIcon from "@mui/icons-material/Settings";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";

export default function BreadcrumbsIconed() {
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Typography
        sx={{ display: "flex", alignItems: "center" }}
        color="text.primary"
      >
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="/"
        >
          <SettingsIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Profile Configuration
        </Link>
      </Typography>
    </Breadcrumbs>
  );
}

// Compare this snippet from lawgic/src/index.js:
