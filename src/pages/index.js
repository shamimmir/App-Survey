import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Page6";
import Page7 from "./Page7";
import Page8 from "./Page8";
import Page9 from "./Page9";

function definePage(title, pageComponent, pageHint) {
  return {
    title,
    pageComponent,
    pageHint,
  };
}

const Pages = [
  definePage("Step 1", Page1.page, Page1.tips),
  definePage("Step 2", Page2.page, Page2.tips),
  definePage("Step 3", Page3.page, Page3.tips),
  definePage("Step 4", Page4.page, Page4.tips),
  definePage("Step 5", Page5.page, Page5.tips),
  definePage("Step 6", Page6.page, Page6.tips),
  definePage("Step 7", Page7.page, Page7.tips),
  definePage("Step 8", Page8.page, Page8.tips),
  definePage("Step 9", Page9.page, Page9.tips),
];

export default Pages;
