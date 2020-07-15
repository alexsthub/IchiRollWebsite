export default function constructMenu(menu) {
  const items = constructItemObject(menu.items);

  const menuItems = {};
  const mainMenu = menu.sections[0];
  mainMenu.children.forEach((section) => {
    const sectionTitle = section.title.en_US;
    let sectionItems = [];
    section.itemIds.forEach((id) => {
      const item = items[id];
      sectionItems.push(item);
    });
    menuItems[sectionTitle] = sectionItems;
  });
  return menuItems;
}

function constructItemObject(rawItems) {
  const items = {};
  rawItems.forEach((item) => {
    items[item.id] = item;
  });
  return items;
}
