import type { DefineComponent } from "vue";
import BoldButton from "./components/BoldButton.vue";
import ItalicButton from "./components/ItalicButton.vue";
import UnderlineButton from "./components/UnderlineButton.vue";
import StrikeButton from "./components/StrikeButton.vue";
import BulletListButton from "./components/BulletListButton.vue";
import OrderedListButton from "./components/OrderedListButton.vue";
import HeaderMenu from "./components/HeaderMenu.vue";
import LinkDialog from "./components/LinkDialog.vue";
import ImageDialog from "./components/ImageDialog.vue";
import ColorInputVue from "./components/ColorInput.vue";

const components = [
  {
    name: "bold",
    component: BoldButton,
    type: "basic",
  },
  {
    name: "italic",
    component: ItalicButton,
    type: "basic",
  },
  {
    name: "underline",
    component: UnderlineButton,
    type: "basic",
  },
  {
    name: "strike",
    component: StrikeButton,
    type: "classic",
  },
  {
    name: "bullet-list",
    component: BulletListButton,
    type: "basic",
  },
  {
    name: "ordered-list",
    component: OrderedListButton,
    type: "classic",
  },
  {
    name: "header-menu",
    component: HeaderMenu,
    type: "basic",
  },
  {
    name: "link-dialog",
    component: LinkDialog,
    type: "classic",
  },
  {
    name: "image-dialog",
    component: ImageDialog,
    type: "classic",
  },
  {
    name: "color-input",
    component: ColorInputVue,
    type: "classic",
  },
];

export interface Component {
  name: string;
  component: DefineComponent;
  type: "basic" | "classic" | "advanced";
}

export default components;
