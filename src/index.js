import React from "react"
import ReactDom from "react-dom/client"
import {SpeechProvider} from '@speechly/react-client'

import { Provider } from "./context/context"
import App from './App'
import './index.css'


const rootNode = document.getElementById('root')
ReactDom.createRoot(rootNode).render(
    <SpeechProvider appId="7110fcaf-fc3a-49bf-8f03-1dbc907ca790" language="en-US">
        <Provider>
            <App />
        </Provider> 
    </SpeechProvider> 
);