import { render } from "solid-js/web";
import Atlas from "./atlas";

render(
	() => <Atlas />,
	document.querySelector("#atlas-root") as HTMLDivElement,
);
