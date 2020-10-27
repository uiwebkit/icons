export function uniAddClasses(data, classNames: string[], elementName: string) {
  if (data.selector) {
    const targets = data.all ? data.el.querySelectorAll(data.selector) : [data.el.querySelector(data.selector)];

    if (targets[0]) {
      targets.forEach((target: Element): void => {
        classNames.forEach((className: string): void => {
          target.classList.add(className);
        });
      });
    } else {
      console.warn(`Element(s) with CSS selector: '${data.selector}' was not found into ${elementName}.
If the selected element is dynamic and when element appears - the 'active' property should be set again.`);
    }
  } else {
    const firstChild = data.el.firstElementChild;

    if (firstChild) {
      classNames.forEach((className: string): void => {
        firstChild.classList.add(className);
      });
    } else {
      console.warn(`${elementName} should have at least one child element.`);
    }
  }
}
