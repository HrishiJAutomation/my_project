import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div as Div1 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button as Button1 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Link as Link1 } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { useFlex6Cb, useFlex10Cb, useDiv18Cb, useTextBox11Cb, useTextBox12Cb, useButton2Cb, useTextBox23Cb, useLink28Cb, useLink29Cb, useLink30Cb } from "../page-cbs/aboutus";
import "../page-css/aboutus.css";
import "../custom/aboutus";

export default function Aboutus() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex6Props = useStore((state)=>state["aboutus"]["Flex6"]);
const Flex6IoProps = useIoStore((state)=>state["aboutus"]["Flex6"]);
const Flex6Cb = useFlex6Cb()
const Flex10Props = useStore((state)=>state["aboutus"]["Flex10"]);
const Flex10IoProps = useIoStore((state)=>state["aboutus"]["Flex10"]);
const Flex10Cb = useFlex10Cb()
const Div18Props = useStore((state)=>state["aboutus"]["Div18"]);
const Div18IoProps = useIoStore((state)=>state["aboutus"]["Div18"]);
const Div18Cb = useDiv18Cb()
const TextBox11Props = useStore((state)=>state["aboutus"]["TextBox11"]);
const TextBox11IoProps = useIoStore((state)=>state["aboutus"]["TextBox11"]);
const TextBox11Cb = useTextBox11Cb()
const TextBox12Props = useStore((state)=>state["aboutus"]["TextBox12"]);
const TextBox12IoProps = useIoStore((state)=>state["aboutus"]["TextBox12"]);
const TextBox12Cb = useTextBox12Cb()
const Button2Props = useStore((state)=>state["aboutus"]["Button2"]);
const Button2IoProps = useIoStore((state)=>state["aboutus"]["Button2"]);
const Button2Cb = useButton2Cb()
const TextBox23Props = useStore((state)=>state["aboutus"]["TextBox23"]);
const TextBox23IoProps = useIoStore((state)=>state["aboutus"]["TextBox23"]);
const TextBox23Cb = useTextBox23Cb()
const Link28Props = useStore((state)=>state["aboutus"]["Link28"]);
const Link28IoProps = useIoStore((state)=>state["aboutus"]["Link28"]);
const Link28Cb = useLink28Cb()
const Link29Props = useStore((state)=>state["aboutus"]["Link29"]);
const Link29IoProps = useIoStore((state)=>state["aboutus"]["Link29"]);
const Link29Cb = useLink29Cb()
const Link30Props = useStore((state)=>state["aboutus"]["Link30"]);
const Link30IoProps = useIoStore((state)=>state["aboutus"]["Link30"]);
const Link30Cb = useLink30Cb()

  return (<>
  <Flex1 className="p-aboutus Flex10 bpt" {...Flex10Props} {...Flex10Cb} {...Flex10IoProps}>
<TextBox1 className="p-aboutus TextBox23 bpt" {...TextBox23Props} {...TextBox23Cb} {...TextBox23IoProps}/>
<Div1 className="p-aboutus Div18 bpt" {...Div18Props} {...Div18Cb} {...Div18IoProps}>
<Link1 className="p-aboutus Link28 bpt" {...Link28Props} {...Link28Cb} {...Link28IoProps}/>
<Link1 className="p-aboutus Link29 bpt" {...Link29Props} {...Link29Cb} {...Link29IoProps}/>
<Link1 className="p-aboutus Link30 bpt" {...Link30Props} {...Link30Cb} {...Link30IoProps}/>
</Div1>
</Flex1>
<Flex1 className="p-aboutus Flex6 bpt" {...Flex6Props} {...Flex6Cb} {...Flex6IoProps}>
<TextBox1 className="p-aboutus TextBox11 bpt" {...TextBox11Props} {...TextBox11Cb} {...TextBox11IoProps}/>
<TextBox1 className="p-aboutus TextBox12 bpt" {...TextBox12Props} {...TextBox12Cb} {...TextBox12IoProps}/>
<Button1 className="p-aboutus Button2 bpt" {...Button2Props} {...Button2Cb} {...Button2IoProps}/>
</Flex1>
  </>);
}
