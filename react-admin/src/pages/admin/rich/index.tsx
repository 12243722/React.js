import {FC, useState} from 'react';
import {Button, Card} from 'antd';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html'; 
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const Rich: FC = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [contentState, setContentState] = useState({})

  const onEditorStateChange: Function = (editorState: any): void => {
    setEditorState(editorState)
  };

  const onContentStateChange: Function = (contentState: any):void => {
    setContentState(contentState)
  };

  const handleClick = () => {
    console.log(draftToHtml(contentState))
  }
  const handleClick2 = () => {
    setEditorState(EditorState.createEmpty())
  }

  return (
    <>
      <Card title="富文本编辑器">
        <Button onClick={handleClick}>导出</Button>
        <Button onClick={handleClick2}>清除内容</Button>
      <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={onEditorStateChange}
          onContentStateChange={onContentStateChange}
        />
      </Card>
    </>
  )
}

export default Rich;