/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

    ControllerSidebar: [{type: 'autogenerated', dirName: 'download' }],
    tuningSidebar: [{ type: 'autogenerated', dirName: 'Tuning' }],
    manufactSidebar: [{ type: 'autogenerated', dirName: 'Manufacturers' }],
    developSidebar: [{ type: 'autogenerated', dirName: 'Contributing' }],
    tutorialSidebar: [

        {
            type: 'doc',
            id: 'index',
            label: 'Welcome',
          },
      {
        type: "category",
        label: "Controllers",
        collapsed: true,
        link: { type: "doc", id: "controllers/index" },
        items: [
          "controllers/rm-nexus",
          "controllers/flydragon2.2",
          "controllers/flywingf405heli",
          "controllers/matek_heli",
          "controllers/matek_hlite",
          "controllers/betaflight-diy",
        ],
      },
      {
        type: "category",
        label: "Tutorial - examples",
        collapsed: true,
        link: { type: "doc", id: "examples/index" },
        items: [
          "examples/example-1",
        ],
      },
      {
        type: "category",
        label: "Tutorial - setup",
        collapsed: true,
        items: [
                    {
                    type: 'category',
                    label: 'Radio Setup',
                    items: [
                        {
                            type: 'category',
                            label: 'Edge Tx',
                            items: [
                            "setup/radio-setup/radio-setup-edgetx/edgetx-generic-radio-setup", 
                            "setup/radio-setup/radio-setup-edgetx/lua-RF2-touch",
                            "setup/radio-setup/radio-setup-edgetx/widget-etx-bob00",
                            ],
                        },
                        {
                            type: 'category',
                            label: 'Frsky Ethos',
                            items: [
                                "setup/radio-setup/radio-setup-ethos/ethos-generic-radio-setup",
                                "setup/radio-setup/radio-setup-ethos/ethos-nexus-setup",
                                "setup/radio-setup/radio-setup-ethos/ethos-nexus-status",
                            ],
                        },
                        {
                            type: 'category',
                            label: 'Jeti',
                            items: [
                            "setup/radio-setup/radio-setup-jeti/jeti-nexus-setup", 
                            ],
                        },
                        {
                            type: 'category',
                            label: 'Others',
                            items: [
                            "setup/radio-setup/radio-setup-others/others", 

                            ],
                        },
                    ],
                    },

          "setup/arming",
          "setup/lua-scripts",
          "setup/backup-and-restore",
          "setup/flashing-the-firmware",
          "setup/remapping",
          "setup/setup-servos",
          "setup/setup-mixer",
          "setup/rpm-measurement",
          "setup/governor",
          "setup/governor-setup",
          "setup/rpm-filters",
          "setup/esc-telemetry",
          "setup/esc-forward-programming",
          "setup/elrs-custom-telemetry",
          "setup/extra-servo",
          "setup/two-stage-gear-train-ratios",
          "setup/profile-switching-example",
          "setup/using-stability-modes-example",
          "setup/led-strip-quick-start",
          "setup/swash-wiggle",
          "setup/blheli_s-to-bluejay",
          "setup/openlager",
        ],
      },
    {
      type: "category",
      label: "Configurator",
      collapsed: true,
      link: { type: "doc", id: "configurator/index" },
      items: [
        "configurator/tabs/status",
        "configurator/tabs/setup",
        "configurator/tabs/configuration",
        "configurator/tabs/receiver",
        "configurator/tabs/failsafe",
        "configurator/tabs/power",
        "configurator/tabs/motors",
        "configurator/tabs/servos",
        "configurator/tabs/mixer",
        "configurator/tabs/gyro",
        "configurator/tabs/rates",
        "configurator/tabs/profiles",
        "configurator/tabs/modes",
        "configurator/tabs/adjustments",
        "configurator/tabs/led-strip",
        "configurator/tabs/beepers",
        "configurator/tabs/gps",
        "configurator/tabs/sensors",
        "configurator/tabs/blackbox",
        "configurator/tabs/cli",
      ],
    },
    ]
};

module.exports = sidebars;
