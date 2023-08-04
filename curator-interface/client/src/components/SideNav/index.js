import { SideNav, SideNavItems, SideNavLink } from "carbon-components-react";

import {
  ChartMultitype32,
  Analytics32,
  WatsonHealthMagnify32,
  FaceAdd32,
} from "@carbon/icons-react";
import { useGlobalState } from "../../hooks/globalState";

import "./style.css";

export default function SideMenu({ open }) {
  const { language, history } = useGlobalState();

  return (
    <SideNav expanded={open} isRail>
      <SideNavItems>
        <SideNavLink
          renderIcon={Analytics32}
          onClick={() => history.push(`/train`)}
        >
          Intent Train Quality
        </SideNavLink>
        <SideNavLink
          renderIcon={FaceAdd32}
          onClick={() => history.push(`/dashboard`)}
        >
          Conversation Evaluation
        </SideNavLink>
        <SideNavLink
          renderIcon={WatsonHealthMagnify32}
          onClick={() => history.push(`/search`)}
        >
          Intent Search
        </SideNavLink>
        <SideNavLink
          renderIcon={ChartMultitype32}
          onClick={() => history.push(`/cognos`)}
        >
          Conversation Performance
        </SideNavLink>
      </SideNavItems>
    </SideNav>
  );
}
