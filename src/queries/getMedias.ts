import { gql } from "@apollo/client";
import MenuFragment from "./fragments/menus";

// query MyQuery {
//   mediaItems(where: {search: "Simone"}) {
//     edges {
//       node {
//         altText
//         id
//         slug
//         title
//         sourceUrl
//       }
//       cursor
//     }
//   }
// }

export const HeaderFooter = `
  headerMenus: menuItems(where: {location: HCMS_MENU_HEADER, parentId: "0"}) {
    edges {
      node {
        ...MenuFragment
        childItems {
          edges {
            node {
              ...MenuFragment
            }
          }
        }
      }
    }
  }
  footerMenus: menuItems(where: {location: HCMS_MENU_FOOTER, parentId: "0"}) {
    edges {
      node {
        ...MenuFragment
      }
    }
  }
`;

export const GET_MENUS = gql`
query GET_MENUS {
  ${HeaderFooter}
}
  ${MenuFragment}
`;
