import { expect, fixture } from "@open-wc/testing";
import { MobileDropdown } from "../index";

describe("MobileDropdown", () => {
  describe("error", () => {
    it("does not display when initializing without props option", async () => {
      const container = new MobileDropdown({});
      const el = await fixture(container);
      const errorEl = el.querySelector(
        ".kuc-mobile-dropdown__error"
      ) as HTMLDivElement;
      await expect(errorEl).not.to.be.displayed;
    });

    it('should be equal "error-message" when initializing error with "error-message"', async () => {
      const container = new MobileDropdown({ error: "error-message" });
      const el = await fixture(container);
      const errorEl = el.querySelector(
        ".kuc-mobile-dropdown__error"
      ) as HTMLDivElement;
      await expect(errorEl.innerText).to.have.equal("error-message");
      await expect(errorEl).to.be.displayed;
    });

    it('should be replace by "replace-error" when changing by setter', async () => {
      const container = new MobileDropdown({
        error: "error-message"
      });
      container.error = "replace-error";
      const el = await fixture(container);
      const errorEl = el.querySelector(
        ".kuc-mobile-dropdown__error"
      ) as HTMLDivElement;
      await expect(errorEl.innerText).to.have.equal("replace-error");
      await expect(errorEl).to.be.displayed;
    });
  });
});
