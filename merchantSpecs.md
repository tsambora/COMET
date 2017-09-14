# COMET SDK Specification

This is COMET SDK specification and guide for merchant's integration.

This spec will guide you through implementing COMET in your online store site. The image shown below is the example of COMET payment prompt that is already integrated to a merchant's website.

![](https://i.imgur.com/McmE7vt.png)
![](https://i.imgur.com/mcPowhb.png)

## Overview
There are two ways to integrate COMET payment prompt to your site:

1. Use COMET as a JS class
2. Use COMET as a React Component

Before integrating COMET SDK, you have to first download COMET blockchain ledger. The SDK will not be usable unless the merchant has the current state of the blockchain.

## COMET usage as a JS class
You can integrate COMET by importing COMET SDK and make a function call somewhere in your payment code.

Import COMET SDK by adding this script tag in your HTML head.
```
<script type="text/javascript" src="cdn.comet.com/merchant/cometSdkV1.js"></script>
```

After the script is imported, you can call `Comet.init()` function to call the COMET payment prompt. This function takes two parameters:
```
Comet.init(blockChainDir, merchantId);
```
`blockChainDir` is the directory of the blockchain in your computer.
`merchantId` is your COMET merchant id.

Calling `Comet.init()` will trigger the comet payment prompt to appear.
![](https://i.imgur.com/McmE7vt.png)

The rest part of the payment is as described in our demo. The COMET SDK will process the user input and cross check it with the blockchain.

## COMET usage as a react component
If your merchant app is a react app. You can integrate COMET by using COMET react component.

Import COMET SDK by adding this script tag in your HTML head.
```
<script type="text/javascript" src="cdn.comet.com/merchant/cometSdkV1.js"></script>
```

In your payment page, import COMET react component
```
import CometInitModal from `Comet`;
```

then add it to your component's render function, along with the logic of when it should appear. For example:
```
{
    this.state.showCometInitModal ?
        <CometInitModal
            blockChainDir="foo"
            merchantId="bar"
        : null
}
```

Adding `<CometInitModal />` to your page's render function will trigger the comet payment prompt to appear.
![](https://i.imgur.com/McmE7vt.png)

The rest part of the payment is as described in our demo. The COMET SDK will process the user input and cross check it with the blockchain.
