import { expect, fixture, elementUpdated } from "@open-wc/testing";
import "../index";

describe("DatePicker", () => {
  describe("position", () => {
    it("should be dislayed calendar to left when right not enough width and long label", async () => {
      const container = document.createElement("kuc-date-picker");
      container.setAttribute("value", "2021-10-20");
      container.setAttribute("label", "long label long label long label");

      const divParentEl = document.createElement("div");
      divParentEl.style.paddingLeft = window.innerWidth - 100 + "px";
      divParentEl.appendChild(container);

      const el = await fixture(divParentEl);
      const inputEl = el.querySelector(
        ".kuc-base-date__input"
      ) as HTMLInputElement;

      inputEl.click();
      await elementUpdated(container);
      await elementUpdated(el);
      const calendaerEl = el.querySelector(
        ".kuc-base-date__calendar"
      ) as HTMLElement;
      const computedStyle = window.getComputedStyle(calendaerEl);

      expect(computedStyle.position).to.equal("absolute");
      expect(computedStyle.top).to.equal("40px");
    });

    it("should be dislayed calendar to top when bottom not enough height", async () => {
      const container = document.createElement("kuc-base-date");
      container.setAttribute("value", "2021-10-20");

      const divParentEl = document.createElement("div");
      divParentEl.style.paddingTop = window.innerHeight - 50 + "px";
      divParentEl.appendChild(container);

      const el = await fixture(divParentEl);
      const inputEl = el.querySelector(
        ".kuc-base-date__input"
      ) as HTMLInputElement;

      inputEl.click();
      await elementUpdated(container);
      await elementUpdated(el);
      const calendaerEl = el.querySelector(
        ".kuc-base-date__calendar"
      ) as HTMLElement;
      const computedStyle = window.getComputedStyle(calendaerEl);

      expect(computedStyle.position).to.equal("absolute");
      expect(computedStyle.bottom).to.equal("40px");
    });

    it("should be dislayed calendar to left when right not enough width", async () => {
      const container = document.createElement("kuc-base-date");
      container.setAttribute("value", "2021-10-20");

      const divParentEl = document.createElement("div");
      divParentEl.style.paddingTop = window.innerHeight - 50 + "px";
      divParentEl.style.paddingLeft = window.innerWidth - 100 + "px";
      divParentEl.appendChild(container);

      const el = await fixture(divParentEl);
      const inputEl = el.querySelector(
        ".kuc-base-date__input"
      ) as HTMLInputElement;
      inputEl.click();
      await elementUpdated(container);
      await elementUpdated(el);
      const calendaerEl = el.querySelector(
        ".kuc-base-date__calendar"
      ) as HTMLElement;
      const computedStyle = window.getComputedStyle(calendaerEl);

      expect(computedStyle.right).to.equal("0px");
      expect(computedStyle.bottom).to.equal("40px");
    });

    it("should be dislayed calendar to right when left not enough width", async () => {
      const container = document.createElement("kuc-base-date");
      container.setAttribute("value", "2021-10-20");

      const divParentEl = document.createElement("div");
      divParentEl.style.paddingLeft = window.innerWidth - 100 + "px";
      divParentEl.appendChild(container);

      const el = await fixture(divParentEl);
      const inputEl = el.querySelector(
        ".kuc-base-date__input"
      ) as HTMLInputElement;
      inputEl.click();
      await elementUpdated(container);
      await elementUpdated(el);
      const calendaerEl = el.querySelector(
        ".kuc-base-date__calendar"
      ) as HTMLElement;
      const computedStyle = window.getComputedStyle(calendaerEl);

      expect(computedStyle.right).to.equal("0px");
      expect(computedStyle.top).to.equal("40px");
    });
  });
});
