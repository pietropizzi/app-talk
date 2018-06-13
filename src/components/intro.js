import React from 'react';
import AppAction from './app-action';
import './intro.module.css';

const xCallbackUrlParamsAction = {
  "name": "Action name",
  "description": "The description of the action.",
  "url": "[app-name]://x-callback-url/[action-name]",
  "parameters": [
    {
      name: 'x-source',
      description: 'The friendly name of the source app calling the action. If the action in the target app requires user interface elements, it may be necessary to identify to the user the app requesting the action.'
    },
    {
      name: 'x-success',
      description: 'If the action in the target method is intended to return a result to the source app, the x-callback parameter should be included and provide a URL to open to return to the source app. On completion of the action, the target app will open this URL, possibly with additional parameters tacked on to return a result to the source app. If x-success is not provided, it is assumed that the user will stay in the target app on successful completion of the action.'
    },
    {
      name: 'x-error',
      description: 'URL to open if the requested action generates an error in the target app. This URL will be open with at least the parameters “errorCode=code&errorMessage=message”. If x-error is not present, and a error occurs, it is assumed the target app will report the failure to the user and remain in the target app.'
    },
    {
      name: 'x-cancel',
      description: 'URL to open if the requested action is cancelled by the user. In the case where the target app offer the user the option to “cancel” the requested action, without a success or error result, this the the URL that should be opened to return the user to the source app.'
    }
  ]
};

export default () => {
  return (
    <div>
      <div className='g-module'>
        <h3 className='g-headline-seperator'>What is this site?</h3>
        <p>This site is about documenting iOS apps that support URLs to do certain actions. Part of that is a standard called <code>x-callback-url</code> which <a href='http://x-callback-url.com'>its makers</a> describe as:</p>
        <blockquote className='g-text-light' styleName='quote'>
          <p>The goal of the x-callback-url specification is to provide a standardized means for iOS developers to expose and document the methods they make available to other apps. Using x-callback-url’s source apps can launch other apps passing data and context information, and also provide parameters instructing the target app to return data and control back to the source app after executing an action.</p>
        </blockquote>
        <p>This site aims to document apps and their URLs in a standardized and easy-to-parse way. It also aims to stay up-to-date by <a href='https://github.com/pietropizzi/app-talk/blob/master/CONTRIBUTING.md'>allowing everyone to participate</a>.</p>
        <h3 className='g-headline-seperator'>Standard Parameters</h3>
        <p>Each URL will be listed by documenting it’s parameters. All x-callback-url compatible URLs support the following parameters:</p>
        <div styleName='appActionWrapper'>
          <AppAction urlOnly action={xCallbackUrlParamsAction} />
        </div>
      </div>
    </div>
  );
};
