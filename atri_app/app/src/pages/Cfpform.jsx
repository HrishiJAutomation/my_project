import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex2 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div as Div2 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { TextBox as TextBox2 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Input } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { Button as Button2 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Link as Link2 } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { useFlex7Cb, useDiv10Cb, useDiv11Cb, useDiv13Cb, useDiv15Cb, useFlex11Cb, useDiv19Cb, useTextBox13Cb, useTextBox17Cb, useInput10Cb, useInput11Cb, useTextBox18Cb, useTextBox20Cb, useInput13Cb, useButton4Cb, useButton5Cb, useTextBox24Cb, useLink31Cb, useLink32Cb, useLink33Cb } from "../page-cbs/cfpform";
import "../page-css/cfpform.css";
import "../custom/cfpform";

export default function Cfpform() {
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

  const Flex7Props = useStore((state)=>state["cfpform"]["Flex7"]);
const Flex7IoProps = useIoStore((state)=>state["cfpform"]["Flex7"]);
const Flex7Cb = useFlex7Cb()
const Div10Props = useStore((state)=>state["cfpform"]["Div10"]);
const Div10IoProps = useIoStore((state)=>state["cfpform"]["Div10"]);
const Div10Cb = useDiv10Cb()
const Div11Props = useStore((state)=>state["cfpform"]["Div11"]);
const Div11IoProps = useIoStore((state)=>state["cfpform"]["Div11"]);
const Div11Cb = useDiv11Cb()
const Div13Props = useStore((state)=>state["cfpform"]["Div13"]);
const Div13IoProps = useIoStore((state)=>state["cfpform"]["Div13"]);
const Div13Cb = useDiv13Cb()
const Div15Props = useStore((state)=>state["cfpform"]["Div15"]);
const Div15IoProps = useIoStore((state)=>state["cfpform"]["Div15"]);
const Div15Cb = useDiv15Cb()
const Flex11Props = useStore((state)=>state["cfpform"]["Flex11"]);
const Flex11IoProps = useIoStore((state)=>state["cfpform"]["Flex11"]);
const Flex11Cb = useFlex11Cb()
const Div19Props = useStore((state)=>state["cfpform"]["Div19"]);
const Div19IoProps = useIoStore((state)=>state["cfpform"]["Div19"]);
const Div19Cb = useDiv19Cb()
const TextBox13Props = useStore((state)=>state["cfpform"]["TextBox13"]);
const TextBox13IoProps = useIoStore((state)=>state["cfpform"]["TextBox13"]);
const TextBox13Cb = useTextBox13Cb()
const TextBox17Props = useStore((state)=>state["cfpform"]["TextBox17"]);
const TextBox17IoProps = useIoStore((state)=>state["cfpform"]["TextBox17"]);
const TextBox17Cb = useTextBox17Cb()
const Input10Props = useStore((state)=>state["cfpform"]["Input10"]);
const Input10IoProps = useIoStore((state)=>state["cfpform"]["Input10"]);
const Input10Cb = useInput10Cb()
const Input11Props = useStore((state)=>state["cfpform"]["Input11"]);
const Input11IoProps = useIoStore((state)=>state["cfpform"]["Input11"]);
const Input11Cb = useInput11Cb()
const TextBox18Props = useStore((state)=>state["cfpform"]["TextBox18"]);
const TextBox18IoProps = useIoStore((state)=>state["cfpform"]["TextBox18"]);
const TextBox18Cb = useTextBox18Cb()
const TextBox20Props = useStore((state)=>state["cfpform"]["TextBox20"]);
const TextBox20IoProps = useIoStore((state)=>state["cfpform"]["TextBox20"]);
const TextBox20Cb = useTextBox20Cb()
const Input13Props = useStore((state)=>state["cfpform"]["Input13"]);
const Input13IoProps = useIoStore((state)=>state["cfpform"]["Input13"]);
const Input13Cb = useInput13Cb()
const Button4Props = useStore((state)=>state["cfpform"]["Button4"]);
const Button4IoProps = useIoStore((state)=>state["cfpform"]["Button4"]);
const Button4Cb = useButton4Cb()
const Button5Props = useStore((state)=>state["cfpform"]["Button5"]);
const Button5IoProps = useIoStore((state)=>state["cfpform"]["Button5"]);
const Button5Cb = useButton5Cb()
const TextBox24Props = useStore((state)=>state["cfpform"]["TextBox24"]);
const TextBox24IoProps = useIoStore((state)=>state["cfpform"]["TextBox24"]);
const TextBox24Cb = useTextBox24Cb()
const Link31Props = useStore((state)=>state["cfpform"]["Link31"]);
const Link31IoProps = useIoStore((state)=>state["cfpform"]["Link31"]);
const Link31Cb = useLink31Cb()
const Link32Props = useStore((state)=>state["cfpform"]["Link32"]);
const Link32IoProps = useIoStore((state)=>state["cfpform"]["Link32"]);
const Link32Cb = useLink32Cb()
const Link33Props = useStore((state)=>state["cfpform"]["Link33"]);
const Link33IoProps = useIoStore((state)=>state["cfpform"]["Link33"]);
const Link33Cb = useLink33Cb()

  return (<>
  <Flex2 className="p-cfpform Flex11 bpt" {...Flex11Props} {...Flex11Cb} {...Flex11IoProps}>
<TextBox2 className="p-cfpform TextBox24 bpt" {...TextBox24Props} {...TextBox24Cb} {...TextBox24IoProps}/>
<Div2 className="p-cfpform Div19 bpt" {...Div19Props} {...Div19Cb} {...Div19IoProps}>
<Link2 className="p-cfpform Link31 bpt" {...Link31Props} {...Link31Cb} {...Link31IoProps}/>
<Link2 className="p-cfpform Link32 bpt" {...Link32Props} {...Link32Cb} {...Link32IoProps}/>
<Link2 className="p-cfpform Link33 bpt" {...Link33Props} {...Link33Cb} {...Link33IoProps}/>
</Div2>
</Flex2>
<Flex2 className="p-cfpform Flex7 bpt" {...Flex7Props} {...Flex7Cb} {...Flex7IoProps}>
<TextBox2 className="p-cfpform TextBox13 bpt" {...TextBox13Props} {...TextBox13Cb} {...TextBox13IoProps}/>
<Div2 className="p-cfpform Div10 bpt" {...Div10Props} {...Div10Cb} {...Div10IoProps}>
<TextBox2 className="p-cfpform TextBox17 bpt" {...TextBox17Props} {...TextBox17Cb} {...TextBox17IoProps}/>
<Input className="p-cfpform Input10 bpt" {...Input10Props} {...Input10Cb} {...Input10IoProps}/>
</Div2>
<Div2 className="p-cfpform Div11 bpt" {...Div11Props} {...Div11Cb} {...Div11IoProps}>
<TextBox2 className="p-cfpform TextBox18 bpt" {...TextBox18Props} {...TextBox18Cb} {...TextBox18IoProps}/>
<Input className="p-cfpform Input11 bpt" {...Input11Props} {...Input11Cb} {...Input11IoProps}/>
</Div2>
<Div2 className="p-cfpform Div13 bpt" {...Div13Props} {...Div13Cb} {...Div13IoProps}>
<TextBox2 className="p-cfpform TextBox20 bpt" {...TextBox20Props} {...TextBox20Cb} {...TextBox20IoProps}/>
<Input className="p-cfpform Input13 bpt" {...Input13Props} {...Input13Cb} {...Input13IoProps}/>
</Div2>
</Flex2>
<Div2 className="p-cfpform Div15 bpt" {...Div15Props} {...Div15Cb} {...Div15IoProps}>
<Button2 className="p-cfpform Button5 bpt" {...Button5Props} {...Button5Cb} {...Button5IoProps}/>
<Button2 className="p-cfpform Button4 bpt" {...Button4Props} {...Button4Cb} {...Button4IoProps}/>
</Div2>
  </>);
}
