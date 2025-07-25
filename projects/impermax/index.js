const { impermaxHelper } = require('./impermaxHelper.js')

const config = {
  ethereum: {
    factories: [
      '0x8C3736e2FE63cc2cD89Ee228D9dBcAb6CE5B767B'
    ]
  },
  polygon: {
    factories: [
      '0xBB92270716C8c424849F17cCc12F4F24AD4064D6',
      '0x7F7AD5b16c97Aa9C2B0447C2676ce7D5CEFEbCd3',
      '0x7ED6eF7419cD9C00693d7A4F81c2a151F49c7aC2',
      '0x60f57cF15a34fA0Aa25eF37eB827E1a0948966c5'
    ]
  },
  arbitrum: {
    factories: [
      '0x8C3736e2FE63cc2cD89Ee228D9dBcAb6CE5B767B',
      '0x9708e0b216a88d38d469b255ce78c1369ad898e6',
      '0x97bc7fefb84a4654d4d3938751b5fe401e8771c2',
    ]
  },
  avax: {
    factories: [
      '0x8C3736e2FE63cc2cD89Ee228D9dBcAb6CE5B767B',
      '0x9708e0b216a88d38d469b255ce78c1369ad898e6',
      '0xc7f24fd6329738320883ba429C6C8133e6492739',
    ]
  },
  moonriver: {
    factories: [
      '0x8C3736e2FE63cc2cD89Ee228D9dBcAb6CE5B767B',
    ]
  },
  canto: {
    factories: [
      '0x9708E0B216a88D38d469B255cE78c1369ad898e6',
    ]
  },
  era: {
    factories: [
      '0x6ce1a2C079871e4d4b91Ff29E7D2acbD42b46E36',
    ]
  },
  fantom: {
    factories: [
      '0x60aE5F446AE1575534A5F234D6EC743215624556',
      '0x9b4ae930255CB8695a9F525dA414F80C4C7a945B',
    ]
  },
  scroll: {
    factories: [
      '0x02Ff7B4d96EeBF8c9B34Fae0418E591e11da3099',
      '0xFBD17F3AA7d6506601D2bF7e15a6C96081296a01', // scroll stablefactory
    ]
  },
  base: {
    factories: [
      '0x66ca66E002a9CEE8dEfE25dB6f0c6225117C2d9f',
      '0x8aDc5F73e63b3Af3fd0648281fE451738D8B9D86',
      '0x47183bB55AD0F891887E099Cec3570d3C667cD00'
    ]
  },
  mantle: {
    factories: [
      '0x3047523D5ed0df1545B1C440BdAaB095f1f3cf5C'
    ]
  },
  optimism: {
    factories: [
      '0xa058Ba91958cD30D44c7B0Cf58A369876Fb70B05',
      '0x48168439ca4ef9e95975e3e2488bfcbd8fb1a80c'
    ]
  },
  real: {
    factories: [
      '0x3b1f3a48a70e372144307a4b126a5cda46e169ad',
      '0x2944e1544cE201ae19e6385490bBA13DaA5f44e4'
    ]
  },
  blast: { 
    factories: [
      '0x7b816c1ccafa7d3e71e279ed9dc3226484f6ef87',
      '0xb3c80cfcdd177e3fce2e66870e4768d1ead89f6c',
      '0xfff3C004D115002E0fe8Ef08bBB127aEF5B97bE1'
    ]
  },
  sonic: { 
    factories: [
      '0x26fca5916c20D252feEF7A58E39886d3d3112b91',
      '0x6e1E988D828D0102BF93434774cd1a2246062564'
    ]
  },
  linea: { 
    factories: [
      '0x7A9212D34DD283e952f8f15f084832e9b48ee746'
    ]
  }
}

const blacklistedPools = {
  ethereum: [
    '0xa00d47b4b304792eb07b09233467b690db847c91', // IMX-WETH
    '0x46af8ac1b82f73db6aacc1645d40c56191ab787b', // NDX-ETH
    '0x8dcba0b75c1038c4babbdc0ff3bd9a8f6979dd13', // DEFI5-ETH
    '0x08650bb9dc722c9c8c62e79c2bafa2d3fc5b3293', // AMP-ETH
    '0xdf5096804705d135656b50b62f9ee13041253d97', // YPIE-ETH
  ],
  polygon: [
        // QuickSwap
    "0x5ed3147F07708A269f744B43c489e6Cf3B60aEC4", //DAI-USDT
    "0x87B94444d0f2c1e4610A2De8504D5d7b81898221", //QUICK-POLYDOGE
    "0x5f819f510ca9b1469e6a3ffe4ecd7f0c1126f8f5", //IMX-ETH [OLD]
    "0xb957D5a232EEbD7C4c4B0A1af9F2043430304E65", //rUSD-USDC
    "0x23312FCEADb118381C33B34343A61c7812f7a6a3", //IMX-ETH
    "0x76483D4Ba1177F69FA1448dB58d2f1dBE0Fb65fa", //IMX-QUICK
    "0xD4f5F9643A4368324aC920414781B1c5655BaeD1", //IMX-QUICK
    "0x8ce3bf56767dD87E87487f3fae63e557B821Ea32", //IMX-WETH
    "0x8ce3bf56767dd87e87487f3fae63e557b821ea32", //IMX-ETH
    // Pearl
    "0x2712fbb291d8784b7bf75e50f472968d0bd43fc1", //USDR-ETH
    "0x7c91c66f7df3d23858937b0d419fd10b72bdc6d3", //USDR-BTC
    "0xbde0990EeB2509931a0f73f78010F00191D746BA", //USDR-MATIC
    "0x281Db118b0CB2865d9370c98AaC6e42523582AED", //USDR-PEARL
    "0x822363B6dFaa8C41c1ADa904F1829143375EA6Da", //USDR-TNGBL
    "0x6467FeF60a061f541967415fcBcDFb6Dc964f711", //USDR-IBEX
    // Satin
    "0x7166f0509bd1deedf90e42046025d929078089b4", //MATIC-LIBERA
    "0x06D3AE1Cfe7D3D27B8b9f541E2d76e5f33778923", //SATIN-CASH
    "0x3E626179241585235FF7B002cc4dC5439338990e", //IBEX-WETH
    "0xCB091859dd1d994d513721fB9722Ca9f8839A825", //ETH-CASH
    "0x7b750A5C4c0c7b36D206383353AB3c54DeE74deF", //MATIC-CASH
  ],
  arbitrum: [
    '0xb7e5e74b52b9ada1042594cfd8abbdee506cc6c5', // IMX-WETH
    '0xcc5c1540683aff992201d8922df44898e1cc9806', // IMX-WETH
    '0x8884cc766b43ca10ea41b30192324c77efdd04cd', // NYAN-ETH
    '0x4062f4775bc001595838fbaae38908b250ee07cf', // SWPR-ETH
  ],
  avax: [
        // Traderjoe
    "0x21249FC0Ad45fB3e33C12BE0fA2B81000A290C5f", //SPELL-AVAX
    "0xa34862a7de51a0e1aee6d3912c3767594390586d", //IMX-AVAX OLD
    // Pangolin V1
    "0xE9439f67201894C30F1C1c6b362F0e9195FB8e2C", //IMX-AVAX
    // Pangolin V2
    "0xde0037aFbE805C00d3CEc67093A40882880779b7", //IMX-AVAX
    "0x69c1C44e8742b66D892294a7EEB9aac51891B0EB", //USDC-UST
    "0xc6E68d77d0f4FA925A1cF2611dAB6b10900Eaf2B", //UST-AVAX
    // Thorus
    "0xd60709441b483453e84aD8E1C30F2e9EE116851D", //USDC-THO
    // Pangolin
    "0xE429Fbdc3275e29cA4c11F9c1EB4C8Cee1fCAda3", //WBTC-USDC
    "0xc532a2885027677c4BE61F710F7D41941dBaD1B1", //ETH-AVAX
    "0x677dCE0683e6Db30325cD97e8d04D138F34821A6", //PNG-AVAX
    "0x65A9a0b25A2397e67Fe688361Bf4113cf4Fa5313", //USDT-AVAX
    // Glacier
    "0x96f1F13865f11E2EC0E15051415f420dAC440EC1", //WETH-USDT.e
    "0x674A38dE6dC83FBde29784C9A974D38a11EbFB37", //BTC.b-AVAX
    "0x4ab56108FD36F5da28b56a43b17909f745d560e4", //AVAX-USDT
    "0x29327d37Ee0395a22dd419E2E81F3Bf2da066cfe", //GMX-USDC
    "0x0d4E0EaFA9002957371a0cadbD3BF168d6D0741A", //fBOMB-AVAX
    "0x7AEDD611c361cfc53d14953A6CbDC2d4Cd48AC94", //AVAX-WMEMO
    "0x8dc6fae7fedd7a60ecbb27c17af830f5811d773e", //MMTH-BTC.b
  ],
  moonriver: [
    '0x6ed3bc66dfcc5ac05daec840a75836da935fac97', // IMX-WETH
  ],
  canto: [],
  era: [],
  fantom: [
    '0x877a330af63094d88792b9ca28ac36c71673eb1c', // IMX-FTM
    '0xb97b6ed451480fe6466a558e9c54eaac32e6c696', // OXD-FTM
  ],
  scroll: [
    "0x94d81405985A4c34EaC4945d2b98c74258EdD07F", // tkn/chi - stakedlp
    "0xE8f4895DF06a0c69A9BA87509EfdBBFBAFe86c2d", // weth/tkn - stakedlp
    "0x7c80Be56a6f23A3E598822648baaFD7524fe1239", // chi/wUKRE stakedlp
    "0xDD14d0c651C63e1EeA5bd8b250cf99757425D68F", // chi/usdc stakedlp
    "0xc90073e1cabcf5069e00c5a6cb10023c9e1d5c4f", // wbtc/eth stakedlp
  ],
  base: [],
  mantle: [],
  optimism: [],
  real: [],
  blast: [],
  sonic: [
    "0xd9de9f15994182518a688933d09787a9a9fb5bc9" // s/shadow stakedlp
  ],
  linea: []
}

module.exports = {}

impermaxHelper(module.exports, config, blacklistedPools)
