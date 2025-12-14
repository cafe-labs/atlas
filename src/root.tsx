import { createRoot } from "react-dom/client";
import Atlas from "./atlas";

createRoot(document.querySelector("#atlas-root") as HTMLDivElement).render(
	<Atlas />,
);
