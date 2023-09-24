import { ComponentType } from "react";

export default function PageLayoutHoc(HocComponent: ComponentType) {
  function PageLayoutHoc(props: any) {
    return (
      <>
        <HocComponent {...props} />
      </>
    );
  }
  return PageLayoutHoc;
}
