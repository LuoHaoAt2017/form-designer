
import { Button } from "antd";

const ControlPanel = () => {
  return <section>控件选择区域</section>
}

const ControlLayout = () => {
  return <section>控件布局区域</section>
}

const ControlSetting = () => {
  return <section>控件设置区域</section>
}

const Designer = () => <>
  <ControlPanel></ControlPanel>
  <ControlLayout></ControlLayout>
  <ControlSetting></ControlSetting>
</>

export default Designer;