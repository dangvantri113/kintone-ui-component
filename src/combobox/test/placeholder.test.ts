import { expect, fixture } from "@open-wc/testing";

import { Combobox } from "../index";

describe("Combobox", () => {
  describe("placeholder", () => {
    it('should be "" when not assigning on constructor', async () => {
      const container = new Combobox({});
      const el = await fixture(container);

      const toggleInputEl = el.querySelector(
        ".kuc-combobox__group__toggle__input",
      ) as HTMLInputElement;
      expect(toggleInputEl.getAttribute("placeholder")).to.equal("");
    });

    it('should be "options-placeholder" when assigning on constructor', async () => {
      const container = new Combobox({ placeholder: "initial-placeholder" });
      const el = await fixture(container);

      const toggleInputEl = el.querySelector(
        ".kuc-combobox__group__toggle__input",
      ) as HTMLInputElement;
      expect(toggleInputEl.getAttribute("placeholder")).to.equal(
        "initial-placeholder",
      );
    });

    it('should be replaced to "replace-placeholder" after changing by setter', async () => {
      const container = new Combobox({ placeholder: "initial-placeholder" });
      container.placeholder = "replace-placeholder";
      const el = await fixture(container);

      const toggleInputEl = el.querySelector(
        ".kuc-combobox__group__toggle__input",
      ) as HTMLInputElement;
      expect(toggleInputEl.getAttribute("placeholder")).to.equal(
        "replace-placeholder",
      );
    });
  });
});
