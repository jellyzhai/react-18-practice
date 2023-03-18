import { text } from '@fortawesome/fontawesome-svg-core'
import React, { useState } from 'react'
import { Prompt } from 'react-router-dom'

export default function Form() {
    const [banLeave, setBanLeave] = useState(false)
  return (
    <div style={{ border: "1px solid skyblue", padding: "10px" }}>
      <Prompt when={banLeave} message={"表单没有填写完成并保存，确定要离开？"} />
      <form>
        <fieldset>这是一个带有离开提示的表单页面</fieldset>
        <input type="text" onChange={(e) => setBanLeave(!!e.target.value.trim())} />
      </form>
    </div>
  );
}
