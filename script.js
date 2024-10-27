const images = [
    'ACD_TXT_UI_HUD_BigBattleModule_Protect_Map.png',
    'ACD_TXT_UI_Icon_NavalPreciseAiming_NPC_Map.png',
    'ACD_TXT_UI_Icon_NavalPreciseAiming_StructuralWeakpoints_Map.png',
    'ACD_UI_HUD_BigBattleModule_DefendCommander_Map.png',
    'ACD_UI_HUD_Icon_InteractionMarker_Map.png',
    'ACD_UI_HUD_Icon_InvestigationMarker_Done_Map.png',
    'ACD_UI_HUD_Icon_InvestigationMarker_Map.png',
    'ACD_UI_Icon_Content_AncientKnowledge_Map.png',
    'ACD_UI_Icon_Content_BigBattle_Athens_Map.png',
    'ACD_UI_Icon_Content_BigBattle_Battlefield_Map.png',
    'ACD_UI_Icon_Content_BigBattle_Sparth_Map.png',
    'ACD_UI_Icon_Content_Brazier_Map.png',
    'ACD_UI_Icon_Content_Captain_Map.png',
    'ACD_UI_Icon_Content_Chest_Map.png',
    'ACD_UI_Icon_Content_Contract_Objective_Map.png',
    'ACD_UI_Icon_Content_FreePrisoners_Map.png',
    'ACD_UI_Icon_Content_LocateObjective_Map.png',
    'ACD_UI_Icon_Content_Locate_Map.png',
    'ACD_UI_Icon_Content_Mercenary_Map.png',
    'ACD_UI_Icon_Content_NationChest_Map.png',
    'ACD_UI_Icon_Content_NationCrate_Map.png',
    'ACD_UI_Icon_Content_Objective_Live_Map.png',
    'ACD_UI_Icon_Content_Objective_Tracked_Map.png',
    'ACD_UI_Icon_Content_PaperNote_Map.png',
    'ACD_UI_Icon_Content_QuestBoard_Map.png',
    'ACD_UI_Icon_Content_Quest_Objective_Map.png',
    'ACD_UI_Icon_Content_Silo_Map.png',
    'ACD_UI_Icon_Content_Stele_Map.png',
    'ACD_UI_Icon_Location_AnimalDen_Completed_Map.png',
    'ACD_UI_Icon_Location_AnimalDen_Map.png',
    'ACD_UI_Icon_Location_Arena_Completed_Map.png',
    'ACD_UI_Icon_Location_Arena_Map.png',
    'ACD_UI_Icon_Location_BanditCamp_Completed_Map.png',
    'ACD_UI_Icon_Location_BanditCamp_Map.png',
    'ACD_UI_Icon_Location_BlackMarket_Map.png',
    'ACD_UI_Icon_Location_BlackSmith_Map.png',
    'ACD_UI_Icon_Location_Camp_FastTravel_Map.png',
    'ACD_UI_Icon_Location_Cave_Completed_Map.png',
    'ACD_UI_Icon_Location_Cave_FastTravel_Map.png',
    'ACD_UI_Icon_Location_Cave_Map.png',
    'ACD_UI_Icon_Location_City_FastTravel_Map.png',
    'ACD_UI_Icon_Location_City_Map.png',
    'ACD_UI_Icon_Location_Dwelling_Completed_Map.png',
    'ACD_UI_Icon_Location_Dwelling_Map.png',
    'ACD_UI_Icon_Location_Fort_FastTravel_Map.png',
    'ACD_UI_Icon_Location_GenPOI_FastTravel_Map.png',
    'ACD_UI_Icon_Location_GenPOI_Map.png',
    'ACD_UI_Icon_Location_GoldenUndiscovered_Map.png',
    'ACD_UI_Icon_Location_LeaderHouse_Completed_Map.png',
    'ACD_UI_Icon_Location_LeaderHouse_Map.png',
    'ACD_UI_Icon_Location_LegendaryAnimalDen_Completed_Map.png',
    'ACD_UI_Icon_Location_LegendaryAnimalDen_Map.png',
    'ACD_UI_Icon_Location_MilitaryCamp_Completed_Map.png',
    'ACD_UI_Icon_Location_MilitaryCamp_Map.png',
    'ACD_UI_Icon_Location_Port_Completed_Map.png',
    'ACD_UI_Icon_Location_Port_Map.png',
    'ACD_UI_Icon_Location_PrimaryFort_Completed_Map.png',
    'ACD_UI_Icon_Location_PrimaryFort_Map.png',
    'ACD_UI_Icon_Location_Quarry_Completed_Map.png',
    'ACD_UI_Icon_Location_Quarry_Map.png',
    'ACD_UI_Icon_Location_RHP_FastTravel_Map.png',
    'ACD_UI_Icon_Location_RHP_Map.png',
    'ACD_UI_Icon_Location_Ruins_Completed_Map.png',
    'ACD_UI_Icon_Location_Ruins_Map.png',
    'ACD_UI_Icon_Location_Sanctuary_FastTravel_Map.png',
    'ACD_UI_Icon_Location_Sanctuary_Map.png',
    'ACD_UI_Icon_Location_SecondaryFort_Completed_Map.png',
    'ACD_UI_Icon_Location_SecondaryFort_Map.png',
    'ACD_UI_Icon_Location_SecretEntrance_Map.png',
    'ACD_UI_Icon_Location_Shipwreck_Completed_Map.png',
    'ACD_UI_Icon_Location_Shipwreck_FastTravel_Map.png',
    'ACD_UI_Icon_Location_Shipwreck_Map.png',
    'ACD_UI_Icon_Location_Temple_Comlpeted_Map.png',
    'ACD_UI_Icon_Location_Temple_Map.png',
    'ACD_UI_Icon_Location_Tombs_Completed_Map.png',
    'ACD_UI_Icon_Location_Tombs_Map.png',
    'ACD_UI_Icon_Location_Undiscovered_Map.png',
    'ACD_UI_Icon_Location_Village_FastTravel_Map.png',
    'ACD_UI_Icon_Location_Village_Map.png',
    'ACD_UI_Icon_NPC_Ancients_Map.png',
    'ACD_UI_Icon_NPC_Convoy_Map.png',
    'ACD_UI_Icon_NPC_Leader_Map.png',
    'ACD_UI_Icon_NPC_Leader_Undiscovered_Map.png',
    'ACD_UI_Icon_NPC_Mercenary_BountyHunter_Map.png',
    'ACD_UI_Icon_NPC_Mercenary_BountyHunter_Undiscovered_Map.png',
    'ACD_UI_Icon_NPC_Mercenary_Map.png',
    'ACD_UI_Icon_NPC_Mercenary_Undiscovered_Map.png',
    'ACD_UI_Icon_PlayerBased_EagleHarassement_Map.png',
    'ACD_UI_Icon_PlayerBased_TamedAnimal_Map.png',
    'ACD_UI_Icon_PlayerBased_Transport_Eagle_Map.png',
    'ACD_UI_Icon_PlayerBased_Transport_Horse_Map.png',
    'ACD_UI_Icon_SocialLayer_Highlighted_Map.png',
    'ACD_UI_Icon_SocialLayer_Map.png',
    'ACD_UI_Icon_SocialLayer_PlayerPhoto_Map.png',
    'ACU_UIicon_Location_Landmark_Map.png',
    'UIIcon_PlayerIcon_Map.png',
    'UI_HUD_FightFeedback_LockTarget_Map.png',
    'UI_Icon_DefaultIcon_Map.png',
    'UI_Icon_LOC_RHP_Complete_Map.png',
    'UI_Icon_LOC_RHP_Map.png',
    'UI_Icon_MISC_CustomMarker_Map.png',
    'UI_Icon_NPC_Ally_Map.png',
    'UI_Icon_Obj_Main_Tracked_Map.png',
    'UI_Icon_Rideable_Camel_Map.png',
    'UI_Icon_Rideable_Chariot_Map.png',
    'UI_Icon_Shop_Stable_Map.png',
    'UI_Icon_Shop_Weaver_Map.png',
    'UI_Icon_SHP_Brotherhood_Map.png'
];
const iconOffsets = {
    "UI_Icon_DefaultIcon_Map.png": {
        "map_offsets": [
            "1D23",
            "2A2C",
            "6F75",
            "95C5",
            "97E4",
            "A085",
            "B81D",
            "BA37",
            "BC53",
            "BE74",
            "FFBA",
            "1AD9F",
            "1B414"
        ],
        "hud_offsets": [
            "1D77",
            "2A80",
            "6FC9",
            "9619",
            "9838",
            "A0D9",
            "B871",
            "BA8B",
            "BCA7",
            "BEC8",
            "1000E",
            "1ADF3",
            "1B468"
        ],
        "compass_offsets": [
            "1DD2",
            "2ADB",
            "7024",
            "9674",
            "9893",
            "A134",
            "B8CC",
            "BAE6",
            "BD02",
            "BF23",
            "10069",
            "1AE4E",
            "1B4C3"
        ],
        "eagle_offsets": [
            "1E20",
            "2B29",
            "7072",
            "96C2",
            "98E1",
            "A182",
            "B91A",
            "BB34",
            "BD50",
            "BF71",
            "100B7",
            "1AE9C",
            "1B511"
        ]
    },
    "UI_Icon_Obj_Main_Tracked_Map.png": {
        "map_offsets": [
            "1F41",
            "25C4",
            "2C62",
            "30C5",
            "32F5",
            "3765",
            "399E",
            "11C36",
            "12086",
            "122B5",
            "124E0",
            "12715",
            "12940",
            "12B75",
            "12FCF"
        ],
        "hud_offsets": [
            "1F95",
            "2618",
            "2CB6",
            "3119",
            "3349",
            "37B9",
            "39F2",
            "11C8A",
            "120DA",
            "12309",
            "12534",
            "12769",
            "12994",
            "12BC9",
            "13023"
        ],
        "compass_offsets": [
            "1FF0",
            "2673",
            "2D11",
            "3174",
            "33A4",
            "3814",
            "3A4D",
            "11CE5",
            "12135",
            "12364",
            "1258F",
            "127C4",
            "129EF",
            "12C24",
            "1307E"
        ],
        "eagle_offsets": [
            "203E",
            "26C1",
            "2D5F",
            "31C2",
            "33F2",
            "3862",
            "3A9B",
            "11D33",
            "12183",
            "123B2",
            "125DD",
            "12812",
            "12A3D",
            "12C72",
            "130CC"
        ]
    },
    "ACD_UI_Icon_Content_Objective_Live_Map.png": {
        "map_offsets": [
            "239B"
        ],
        "hud_offsets": [
            "23EF"
        ],
        "compass_offsets": [
            "244A"
        ],
        "eagle_offsets": [
            "2498"
        ]
    },
    "ACD_UI_Icon_Content_LocateObjective_Map.png": {
        "map_offsets": [
            "2E95"
        ],
        "hud_offsets": [
            "2EE9"
        ],
        "compass_offsets": [
            "2F44"
        ],
        "eagle_offsets": [
            "2F92"
        ]
    },
    "UI_Icon_MISC_CustomMarker_Map.png": {
        "map_offsets": [
            "3DEB"
        ],
        "hud_offsets": [
            "3E3F"
        ],
        "compass_offsets": [
            "3E9A"
        ],
        "eagle_offsets": [
            "3EE8"
        ]
    },
    "ACD_UI_HUD_Icon_InteractionMarker_Map.png": {
        "map_offsets": [
            "422B"
        ],
        "hud_offsets": [
            "427F"
        ],
        "compass_offsets": [
            "42DA"
        ],
        "eagle_offsets": [
            "4328"
        ]
    },
    "ACD_UI_Icon_PlayerBased_Transport_Horse_Map.png": {
        "map_offsets": [
            "4450"
        ],
        "hud_offsets": [
            "44A4"
        ],
        "compass_offsets": [
            "44FF"
        ],
        "eagle_offsets": [
            "454D"
        ]
    },
    "ACD_UI_Icon_PlayerBased_Transport_Eagle_Map.png": {
        "map_offsets": [
            "466C"
        ],
        "hud_offsets": [
            "46C0"
        ],
        "compass_offsets": [
            "471B"
        ],
        "eagle_offsets": [
            "4769"
        ]
    },
    "UI_HUD_FightFeedback_LockTarget_Map.png": {
        "map_offsets": [
            "4889"
        ],
        "hud_offsets": [
            "48DD"
        ],
        "compass_offsets": [
            "4994"
        ],
        "eagle_offsets": [
            "49E2"
        ]
    },
    "UI_Icon_Rideable_Camel_Map.png": {
        "map_offsets": [
            "4B06"
        ],
        "hud_offsets": [
            "4B5A"
        ],
        "compass_offsets": [
            "4BB5"
        ],
        "eagle_offsets": [
            "4C03"
        ]
    },
    "UI_Icon_Rideable_Chariot_Map.png": {
        "map_offsets": [
            "4D29"
        ],
        "hud_offsets": [
            "4D7D"
        ],
        "compass_offsets": [
            "4DD8"
        ],
        "eagle_offsets": [
            "4E26"
        ]
    },
    "ACD_UI_Icon_Location_SecretEntrance_Map.png": {
        "map_offsets": [
            "55D6"
        ],
        "hud_offsets": [
            "562A"
        ],
        "compass_offsets": [
            "5685"
        ],
        "eagle_offsets": [
            "56D3"
        ]
    },
    "ACD_UI_Icon_Content_Chest_Map.png": {
        "map_offsets": [
            "57F4",
            "B3DD"
        ],
        "hud_offsets": [
            "5848",
            "B431"
        ],
        "compass_offsets": [
            "58A3",
            "B48C"
        ],
        "eagle_offsets": [
            "58F1",
            "B4DA"
        ]
    },
    "ACD_UI_Icon_PlayerBased_EagleHarassement_Map.png": {
        "map_offsets": [
            "5A17",
            "5C39"
        ],
        "hud_offsets": [
            "5A6B",
            "5C8D"
        ],
        "compass_offsets": [
            "5AC6",
            "5CE8"
        ],
        "eagle_offsets": [
            "5B14",
            "5D36"
        ]
    },
    "ACD_UI_Icon_Content_PaperNote_Map.png": {
        "map_offsets": [
            "62B6"
        ],
        "hud_offsets": [
            "630A"
        ],
        "compass_offsets": [
            "6365"
        ],
        "eagle_offsets": [
            "63B3"
        ]
    },
    "ACD_UI_Icon_Content_Stele_Map.png": {
        "map_offsets": [
            "64DF"
        ],
        "hud_offsets": [
            "6533"
        ],
        "compass_offsets": [
            "658E"
        ],
        "eagle_offsets": [
            "65DC"
        ]
    },
    "ACD_UI_Icon_Content_Silo_Map.png": {
        "map_offsets": [
            "6700"
        ],
        "hud_offsets": [
            "6754"
        ],
        "compass_offsets": [
            "67AF"
        ],
        "eagle_offsets": [
            "67FD"
        ]
    },
    "ACD_UI_Icon_Content_AncientKnowledge_Map.png": {
        "map_offsets": [
            "692D"
        ],
        "hud_offsets": [
            "6981"
        ],
        "compass_offsets": [
            "69DC"
        ],
        "eagle_offsets": [
            "6A2A"
        ]
    },
    "ACD_UI_Icon_Content_Brazier_Map.png": {
        "map_offsets": [
            "6B46"
        ],
        "hud_offsets": [
            "6B9A"
        ],
        "compass_offsets": [
            "6BF5"
        ],
        "eagle_offsets": [
            "6C43"
        ]
    },
    "ACD_UI_Icon_PlayerBased_TamedAnimal_Map.png": {
        "map_offsets": [
            "7196"
        ],
        "hud_offsets": [
            "71EA"
        ],
        "compass_offsets": [
            "7245"
        ],
        "eagle_offsets": [
            "7293"
        ]
    },
    "UIIcon_PlayerIcon_Map.png": {
        "map_offsets": [
            "73B9"
        ],
        "hud_offsets": [
            "740D"
        ],
        "compass_offsets": [
            "7468"
        ],
        "eagle_offsets": [
            "74B6"
        ]
    },
    "UI_Icon_NPC_Ally_Map.png": {
        "map_offsets": [
            "75CF"
        ],
        "hud_offsets": [
            "7623"
        ],
        "compass_offsets": [
            "767E"
        ],
        "eagle_offsets": [
            "76CC"
        ]
    },
    "UI_Icon_LOC_RHP_Complete_Map.png": {
        "map_offsets": [
            "7C4E"
        ],
        "hud_offsets": [
            "7CA2"
        ],
        "compass_offsets": [
            "7CFD"
        ],
        "eagle_offsets": [
            "7D4B"
        ]
    },
    "ACU_UIicon_Location_Landmark_Map.png": {
        "map_offsets": [
            "7E6C"
        ],
        "hud_offsets": [
            "7EC0"
        ],
        "compass_offsets": [
            "7F1B"
        ],
        "eagle_offsets": [
            "7F69"
        ]
    },
    "ACD_UI_Icon_Location_BlackMarket_Map.png": {
        "map_offsets": [
            "808D",
            "82B0"
        ],
        "hud_offsets": [
            "80E1",
            "8304"
        ],
        "compass_offsets": [
            "813C",
            "835F"
        ],
        "eagle_offsets": [
            "818A",
            "83AD"
        ]
    },
    "ACD_UI_Icon_Location_BlackSmith_Map.png": {
        "map_offsets": [
            "84D0"
        ],
        "hud_offsets": [
            "8524"
        ],
        "compass_offsets": [
            "857F"
        ],
        "eagle_offsets": [
            "85CD"
        ]
    },
    "UI_Icon_Shop_Weaver_Map.png": {
        "map_offsets": [
            "86EC"
        ],
        "hud_offsets": [
            "8740"
        ],
        "compass_offsets": [
            "879B"
        ],
        "eagle_offsets": [
            "87E9"
        ]
    },
    "UI_Icon_Shop_Stable_Map.png": {
        "map_offsets": [
            "8909"
        ],
        "hud_offsets": [
            "895D"
        ],
        "compass_offsets": [
            "89B8"
        ],
        "eagle_offsets": [
            "8A06"
        ]
    },
    "UI_Icon_SHP_Brotherhood_Map.png": {
        "map_offsets": [
            "8B2A"
        ],
        "hud_offsets": [
            "8B7E"
        ],
        "compass_offsets": [
            "8BD9"
        ],
        "eagle_offsets": [
            "8C27"
        ]
    },
    "UI_Icon_LOC_RHP_Map.png": {
        "map_offsets": [
            "8D3F"
        ],
        "hud_offsets": [
            "8D93"
        ],
        "compass_offsets": [
            "8DEE"
        ],
        "eagle_offsets": [
            "8E3C"
        ]
    },
    "ACD_UI_Icon_Location_RHP_Map.png": {
        "map_offsets": [
            "8F5E",
            "9182"
        ],
        "hud_offsets": [
            "8FB2",
            "91D6"
        ],
        "compass_offsets": [
            "900D",
            "9231"
        ],
        "eagle_offsets": [
            "905B",
            "927F"
        ]
    },
    "ACD_UI_Icon_Location_RHP_FastTravel_Map.png": {
        "map_offsets": [
            "93A5"
        ],
        "hud_offsets": [
            "93F9"
        ],
        "compass_offsets": [
            "9454"
        ],
        "eagle_offsets": [
            "94A2"
        ]
    },
    "ACD_UI_Icon_Location_Undiscovered_Map.png": {
        "map_offsets": [
            "9A09",
            "FB62",
            "1D038",
            "1D260",
            "1D485",
            "1D6B0",
            "1D8D5",
            "1DAFA",
            "1DD22",
            "1DF4E",
            "1E178",
            "1E3A2",
            "1E5CA"
        ],
        "hud_offsets": [
            "9A5D",
            "FBB6",
            "1D08C",
            "1D2B4",
            "1D4D9",
            "1D704",
            "1D929",
            "1DB4E",
            "1DD76",
            "1DFA2",
            "1E1CC",
            "1E3F6",
            "1E61E"
        ],
        "compass_offsets": [
            "9AB8",
            "FC11",
            "1D0E7",
            "1D30F",
            "1D534",
            "1D75F",
            "1D984",
            "1DBA9",
            "1DDD1",
            "1DFFD",
            "1E227",
            "1E451",
            "1E679"
        ],
        "eagle_offsets": [
            "9B06",
            "FC5F",
            "1D135",
            "1D35D",
            "1D582",
            "1D7AD",
            "1D9D2",
            "1DBF7",
            "1DE1F",
            "1E04B",
            "1E275",
            "1E49F",
            "1E6C7"
        ]
    },
    "ACD_UI_Icon_Location_AnimalDen_Map.png": {
        "map_offsets": [
            "9C33"
        ],
        "hud_offsets": [
            "9C87"
        ],
        "compass_offsets": [
            "9CE2"
        ],
        "eagle_offsets": [
            "9D30"
        ]
    },
    "ACD_UI_Icon_Location_AnimalDen_Completed_Map.png": {
        "map_offsets": [
            "9E5C"
        ],
        "hud_offsets": [
            "9EB0"
        ],
        "compass_offsets": [
            "9F0B"
        ],
        "eagle_offsets": [
            "9F59"
        ]
    },
    "ACD_UI_Icon_Location_GoldenUndiscovered_Map.png": {
        "map_offsets": [
            "A2B4"
        ],
        "hud_offsets": [
            "A308"
        ],
        "compass_offsets": [
            "A363"
        ],
        "eagle_offsets": [
            "A3B1"
        ]
    },
    "ACD_UI_Icon_Location_LegendaryAnimalDen_Map.png": {
        "map_offsets": [
            "A4E8"
        ],
        "hud_offsets": [
            "A53C"
        ],
        "compass_offsets": [
            "A597"
        ],
        "eagle_offsets": [
            "A5E5"
        ]
    },
    "ACD_UI_Icon_Location_LegendaryAnimalDen_Completed_Map.png": {
        "map_offsets": [
            "A71B"
        ],
        "hud_offsets": [
            "A76F"
        ],
        "compass_offsets": [
            "A7CA"
        ],
        "eagle_offsets": [
            "A818"
        ]
    },
    "ACD_UI_Icon_SocialLayer_Map.png": {
        "map_offsets": [
            "A934",
            "AD76",
            "AF96"
        ],
        "hud_offsets": [
            "A988",
            "ADCA",
            "AFEA"
        ],
        "compass_offsets": [
            "A9E3",
            "AE25",
            "B045"
        ],
        "eagle_offsets": [
            "AA31",
            "AE73",
            "B093"
        ]
    },
    "ACD_UI_Icon_SocialLayer_Highlighted_Map.png": {
        "map_offsets": [
            "AB57"
        ],
        "hud_offsets": [
            "ABAB"
        ],
        "compass_offsets": [
            "AC06"
        ],
        "eagle_offsets": [
            "AC54"
        ]
    },
    "ACD_UI_Icon_SocialLayer_PlayerPhoto_Map.png": {
        "map_offsets": [
            "B1BB"
        ],
        "hud_offsets": [
            "B20F"
        ],
        "compass_offsets": [
            "B26A"
        ],
        "eagle_offsets": [
            "B2B8"
        ]
    },
    "ACD_UI_Icon_Content_FreePrisoners_Map.png": {
        "map_offsets": [
            "B5FF"
        ],
        "hud_offsets": [
            "B653"
        ],
        "compass_offsets": [
            "B6AE"
        ],
        "eagle_offsets": [
            "B6FC"
        ]
    },
    "ACD_UI_Icon_NPC_Mercenary_BountyHunter_Map.png": {
        "map_offsets": [
            "C096",
            "115BF"
        ],
        "hud_offsets": [
            "C0EA",
            "11613"
        ],
        "compass_offsets": [
            "C145",
            "1166E"
        ],
        "eagle_offsets": [
            "C193",
            "116BC"
        ]
    },
    "ACD_UI_Icon_NPC_Ancients_Map.png": {
        "map_offsets": [
            "C2BD",
            "CD6B"
        ],
        "hud_offsets": [
            "C311",
            "CDBF"
        ],
        "compass_offsets": [
            "C36C",
            "CE1A"
        ],
        "eagle_offsets": [
            "C3BA",
            "CE68"
        ]
    },
    "ACD_UI_Icon_NPC_Convoy_Map.png": {
        "map_offsets": [
            "C4D9"
        ],
        "hud_offsets": [
            "C52D"
        ],
        "compass_offsets": [
            "C588"
        ],
        "eagle_offsets": [
            "C5D6"
        ]
    },
    "ACD_UI_Icon_Content_NationCrate_Map.png": {
        "map_offsets": [
            "C6FA",
            "F71C"
        ],
        "hud_offsets": [
            "C74E",
            "F770"
        ],
        "compass_offsets": [
            "C7A9",
            "F7CB"
        ],
        "eagle_offsets": [
            "C7F7",
            "F819"
        ]
    },
    "ACD_UI_Icon_Content_BigBattle_Athens_Map.png": {
        "map_offsets": [
            "C924"
        ],
        "hud_offsets": [
            "C978"
        ],
        "compass_offsets": [
            "C9D3"
        ],
        "eagle_offsets": [
            "CA21"
        ]
    },
    "ACD_UI_Icon_Content_BigBattle_Sparth_Map.png": {
        "map_offsets": [
            "CB4E"
        ],
        "hud_offsets": [
            "CBA2"
        ],
        "compass_offsets": [
            "CBFD"
        ],
        "eagle_offsets": [
            "CC4B"
        ]
    },
    "ACD_UI_Icon_NPC_Mercenary_BountyHunter_Undiscovered_Map.png": {
        "map_offsets": [
            "CF99"
        ],
        "hud_offsets": [
            "CFED"
        ],
        "compass_offsets": [
            "D048"
        ],
        "eagle_offsets": [
            "D096"
        ]
    },
    "ACD_UI_Icon_NPC_Leader_Map.png": {
        "map_offsets": [
            "D3E2",
            "D5FE",
            "D82D",
            "DA5C",
            "101E7"
        ],
        "hud_offsets": [
            "D436",
            "D652",
            "D881",
            "DAB0",
            "1023B"
        ],
        "compass_offsets": [
            "D491",
            "D6AD",
            "D8DC",
            "DB0B",
            "10296"
        ],
        "eagle_offsets": [
            "D4DF",
            "D6FB",
            "D92A",
            "DB59",
            "102E4"
        ]
    },
    "ACD_UI_Icon_NPC_Leader_Undiscovered_Map.png": {
        "map_offsets": [
            "DC8D",
            "DEBE"
        ],
        "hud_offsets": [
            "DCE1",
            "DF12"
        ],
        "compass_offsets": [
            "DD3C",
            "DF6D"
        ],
        "eagle_offsets": [
            "DD8A",
            "DFBB"
        ]
    },
    "ACD_TXT_UI_Icon_NavalPreciseAiming_NPC_Map.png": {
        "map_offsets": [
            "E0E2"
        ],
        "hud_offsets": [
            "E136"
        ],
        "compass_offsets": [
            "E191"
        ],
        "eagle_offsets": [
            "E1DF"
        ]
    },
    "ACD_TXT_UI_Icon_NavalPreciseAiming_StructuralWeakpoints_Map.png": {
        "map_offsets": [
            "E308"
        ],
        "hud_offsets": [
            "E35C"
        ],
        "compass_offsets": [
            "E3B7"
        ],
        "eagle_offsets": [
            "E405"
        ]
    },
    "ACD_UI_Icon_Content_Objective_Tracked_Map.png": {
        "map_offsets": [
            "E530",
            "E758"
        ],
        "hud_offsets": [
            "E584",
            "E7AC"
        ],
        "compass_offsets": [
            "E5DF",
            "E825"
        ],
        "eagle_offsets": [
            "E62D",
            "E873"
        ]
    },
    "ACD_UI_Icon_Content_Captain_Map.png": {
        "map_offsets": [
            "E99A",
            "EE2B"
        ],
        "hud_offsets": [
            "E9EE",
            "EE7F"
        ],
        "compass_offsets": [
            "EA67",
            "EEF8"
        ],
        "eagle_offsets": [
            "EAB5",
            "EF46"
        ]
    },
    "ACD_UI_Icon_Content_Mercenary_Map.png": {
        "map_offsets": [
            "EBE0"
        ],
        "hud_offsets": [
            "EC34"
        ],
        "compass_offsets": [
            "ECAD"
        ],
        "eagle_offsets": [
            "ECFB"
        ]
    },
    "ACD_TXT_UI_HUD_BigBattleModule_Protect_Map.png": {
        "map_offsets": [
            "F06D"
        ],
        "hud_offsets": [
            "F0C1"
        ],
        "compass_offsets": [
            "F13A"
        ],
        "eagle_offsets": [
            "F188"
        ]
    },
    "ACD_UI_HUD_BigBattleModule_DefendCommander_Map.png": {
        "map_offsets": [
            "F2B8"
        ],
        "hud_offsets": [
            "F30C"
        ],
        "compass_offsets": [
            "F385"
        ],
        "eagle_offsets": [
            "F3D3"
        ]
    },
    "ACD_UI_Icon_NPC_Mercenary_Map.png": {
        "map_offsets": [
            "10D16",
            "10F3F"
        ],
        "hud_offsets": [
            "10D6A",
            "10F93"
        ],
        "compass_offsets": [
            "10DC5",
            "10FEE"
        ],
        "eagle_offsets": [
            "10E13",
            "1103C"
        ]
    },
    "ACD_UI_Icon_NPC_Mercenary_Undiscovered_Map.png": {
        "map_offsets": [
            "1116A"
        ],
        "hud_offsets": [
            "111BE"
        ],
        "compass_offsets": [
            "11219"
        ],
        "eagle_offsets": [
            "11267"
        ]
    },
    "ACD_UI_Icon_Content_Locate_Map.png": {
        "map_offsets": [
            "117E2"
        ],
        "hud_offsets": [
            "11836"
        ],
        "compass_offsets": [
            "11891"
        ],
        "eagle_offsets": [
            "118DF"
        ]
    },
    "ACD_UI_Icon_Content_Quest_Objective_Map.png": {
        "map_offsets": [
            "11A07"
        ],
        "hud_offsets": [
            "11A5B"
        ],
        "compass_offsets": [
            "11AB6"
        ],
        "eagle_offsets": [
            "11B04"
        ]
    },
    "ACD_UI_Icon_Content_Contract_Objective_Map.png": {
        "map_offsets": [
            "11E59"
        ],
        "hud_offsets": [
            "11EAD"
        ],
        "compass_offsets": [
            "11F08"
        ],
        "eagle_offsets": [
            "11F56"
        ]
    },
    "ACD_UI_HUD_Icon_InvestigationMarker_Done_Map.png": {
        "map_offsets": [
            "12DA4",
            "131F4"
        ],
        "hud_offsets": [
            "12DF8",
            "13248"
        ],
        "compass_offsets": [
            "12E53",
            "132A3"
        ],
        "eagle_offsets": [
            "12EA1",
            "132F1"
        ]
    },
    "ACD_UI_HUD_Icon_InvestigationMarker_Map.png": {
        "map_offsets": [
            "13424"
        ],
        "hud_offsets": [
            "13478"
        ],
        "compass_offsets": [
            "134D3"
        ],
        "eagle_offsets": [
            "13521"
        ]
    },
    "ACD_UI_Icon_Location_Sanctuary_Map.png": {
        "map_offsets": [
            "13648",
            "13877",
            "13CE0"
        ],
        "hud_offsets": [
            "1369C",
            "138CB",
            "13D34"
        ],
        "compass_offsets": [
            "136F7",
            "13926",
            "13D8F"
        ],
        "eagle_offsets": [
            "13745",
            "13974",
            "13DDD"
        ]
    },
    "ACD_UI_Icon_Location_Sanctuary_FastTravel_Map.png": {
        "map_offsets": [
            "13AB1"
        ],
        "hud_offsets": [
            "13B05"
        ],
        "compass_offsets": [
            "13B60"
        ],
        "eagle_offsets": [
            "13BAE"
        ]
    },
    "ACD_UI_Icon_Location_GenPOI_Map.png": {
        "map_offsets": [
            "13F10",
            "186A5"
        ],
        "hud_offsets": [
            "13F64",
            "186F9"
        ],
        "compass_offsets": [
            "13FBF",
            "18754"
        ],
        "eagle_offsets": [
            "1400D",
            "187A2"
        ]
    },
    "ACD_UI_Icon_Location_MilitaryCamp_Map.png": {
        "map_offsets": [
            "14135",
            "145A0",
            "1590F",
            "15B39",
            "15F98",
            "18478",
            "18D1E"
        ],
        "hud_offsets": [
            "14189",
            "145F4",
            "15963",
            "15B8D",
            "15FEC",
            "184CC",
            "18D72"
        ],
        "compass_offsets": [
            "141E4",
            "1464F",
            "159BE",
            "15BE8",
            "16047",
            "18527",
            "18DCD"
        ],
        "eagle_offsets": [
            "14232",
            "1469D",
            "15A0C",
            "15C36",
            "16095",
            "18575",
            "18E1B"
        ]
    },
    "ACD_UI_Icon_Location_GenPOI_FastTravel_Map.png": {
        "map_offsets": [
            "14370"
        ],
        "hud_offsets": [
            "143C4"
        ],
        "compass_offsets": [
            "1441F"
        ],
        "eagle_offsets": [
            "1446D"
        ]
    },
    "ACD_UI_Icon_Location_City_Map.png": {
        "map_offsets": [
            "147BF",
            "149E9",
            "14C13",
            "17DFF"
        ],
        "hud_offsets": [
            "14813",
            "14A3D",
            "14C67",
            "17E53"
        ],
        "compass_offsets": [
            "1486E",
            "14A98",
            "14CC2",
            "17EAE"
        ],
        "eagle_offsets": [
            "148BC",
            "14AE6",
            "14D10",
            "17EFC"
        ]
    },
    "ACD_UI_Icon_Location_City_FastTravel_Map.png": {
        "map_offsets": [
            "14E48"
        ],
        "hud_offsets": [
            "14E9C"
        ],
        "compass_offsets": [
            "14EF7"
        ],
        "eagle_offsets": [
            "14F45"
        ]
    },
    "ACD_UI_Icon_Location_Cave_Map.png": {
        "map_offsets": [
            "15067",
            "15291",
            "156F0"
        ],
        "hud_offsets": [
            "150BB",
            "152E5",
            "15744"
        ],
        "compass_offsets": [
            "15116",
            "15340",
            "1579F"
        ],
        "eagle_offsets": [
            "15164",
            "1538E",
            "157ED"
        ]
    },
    "ACD_UI_Icon_Location_Cave_FastTravel_Map.png": {
        "map_offsets": [
            "154C6"
        ],
        "hud_offsets": [
            "1551A"
        ],
        "compass_offsets": [
            "15575"
        ],
        "eagle_offsets": [
            "155C3"
        ]
    },
    "ACD_UI_Icon_Location_Camp_FastTravel_Map.png": {
        "map_offsets": [
            "15D6E"
        ],
        "hud_offsets": [
            "15DC2"
        ],
        "compass_offsets": [
            "15E1D"
        ],
        "eagle_offsets": [
            "15E6B"
        ]
    },
    "ACD_UI_Icon_Location_Village_Map.png": {
        "map_offsets": [
            "161BA",
            "163E7",
            "1684C",
            "1BA8C",
            "1C110"
        ],
        "hud_offsets": [
            "1620E",
            "1643B",
            "168A0",
            "1BAE0",
            "1C164"
        ],
        "compass_offsets": [
            "16269",
            "16496",
            "168FB",
            "1BB3B",
            "1C1BF"
        ],
        "eagle_offsets": [
            "162B7",
            "164E4",
            "16949",
            "1BB89",
            "1C20D"
        ]
    },
    "ACD_UI_Icon_Location_Village_FastTravel_Map.png": {
        "map_offsets": [
            "1661F"
        ],
        "hud_offsets": [
            "16673"
        ],
        "compass_offsets": [
            "166CE"
        ],
        "eagle_offsets": [
            "1671C"
        ]
    },
    "ACD_UI_Icon_Location_Shipwreck_Map.png": {
        "map_offsets": [
            "16A70",
            "16ED9",
            "17108"
        ],
        "hud_offsets": [
            "16AC4",
            "16F2D",
            "1715C"
        ],
        "compass_offsets": [
            "16B1F",
            "16F88",
            "171B7"
        ],
        "eagle_offsets": [
            "16B6D",
            "16FD6",
            "17205"
        ]
    },
    "ACD_UI_Icon_Location_Shipwreck_FastTravel_Map.png": {
        "map_offsets": [
            "16CAA"
        ],
        "hud_offsets": [
            "16CFE"
        ],
        "compass_offsets": [
            "16D59"
        ],
        "eagle_offsets": [
            "16DA7"
        ]
    },
    "ACD_UI_Icon_Location_PrimaryFort_Map.png": {
        "map_offsets": [
            "17327",
            "17551",
            "179B0",
            "19800",
            "1A0B4",
            "1A728",
            "1C796"
        ],
        "hud_offsets": [
            "1737B",
            "175A5",
            "17A04",
            "19854",
            "1A108",
            "1A77C",
            "1C7EA"
        ],
        "compass_offsets": [
            "173D6",
            "17600",
            "17A5F",
            "198AF",
            "1A163",
            "1A7D7",
            "1C845"
        ],
        "eagle_offsets": [
            "17424",
            "1764E",
            "17AAD",
            "198FD",
            "1A1B1",
            "1A825",
            "1C893"
        ]
    },
    "ACD_UI_Icon_Location_Fort_FastTravel_Map.png": {
        "map_offsets": [
            "17786"
        ],
        "hud_offsets": [
            "177DA"
        ],
        "compass_offsets": [
            "17835"
        ],
        "eagle_offsets": [
            "17883"
        ]
    },
    "ACD_UI_Icon_Location_Temple_Map.png": {
        "map_offsets": [
            "17BD2",
            "1C344"
        ],
        "hud_offsets": [
            "17C26",
            "1C398"
        ],
        "compass_offsets": [
            "17C81",
            "1C3F3"
        ],
        "eagle_offsets": [
            "17CCF",
            "1C441"
        ]
    },
    "ACD_UI_Icon_Location_LeaderHouse_Map.png": {
        "map_offsets": [
            "18025",
            "18256"
        ],
        "hud_offsets": [
            "18079",
            "182AA"
        ],
        "compass_offsets": [
            "180D4",
            "18305"
        ],
        "eagle_offsets": [
            "18122",
            "18353"
        ]
    },
    "ACD_UI_Icon_Location_Cave_Completed_Map.png": {
        "map_offsets": [
            "188CE"
        ],
        "hud_offsets": [
            "18922"
        ],
        "compass_offsets": [
            "1897D"
        ],
        "eagle_offsets": [
            "189CB"
        ]
    },
    "ACD_UI_Icon_Location_MilitaryCamp_Completed_Map.png": {
        "map_offsets": [
            "18AF7"
        ],
        "hud_offsets": [
            "18B4B"
        ],
        "compass_offsets": [
            "18BA6"
        ],
        "eagle_offsets": [
            "18BF4"
        ]
    },
    "ACD_UI_Icon_Location_BanditCamp_Map.png": {
        "map_offsets": [
            "18F50"
        ],
        "hud_offsets": [
            "18FA4"
        ],
        "compass_offsets": [
            "18FFF"
        ],
        "eagle_offsets": [
            "1904D"
        ]
    },
    "ACD_UI_Icon_Location_BanditCamp_Completed_Map.png": {
        "map_offsets": [
            "19181"
        ],
        "hud_offsets": [
            "191D5"
        ],
        "compass_offsets": [
            "19230"
        ],
        "eagle_offsets": [
            "1927E"
        ]
    },
    "ACD_UI_Icon_Location_Shipwreck_Completed_Map.png": {
        "map_offsets": [
            "193AF"
        ],
        "hud_offsets": [
            "19403"
        ],
        "compass_offsets": [
            "1945E"
        ],
        "eagle_offsets": [
            "194AC"
        ]
    },
    "ACD_UI_Icon_Location_PrimaryFort_Completed_Map.png": {
        "map_offsets": [
            "195D8"
        ],
        "hud_offsets": [
            "1962C"
        ],
        "compass_offsets": [
            "19687"
        ],
        "eagle_offsets": [
            "196D5"
        ]
    },
    "ACD_UI_Icon_Location_SecondaryFort_Map.png": {
        "map_offsets": [
            "19A33"
        ],
        "hud_offsets": [
            "19A87"
        ],
        "compass_offsets": [
            "19AE2"
        ],
        "eagle_offsets": [
            "19B30"
        ]
    },
    "ACD_UI_Icon_Location_SecondaryFort_Completed_Map.png": {
        "map_offsets": [
            "19C65"
        ],
        "hud_offsets": [
            "19CB9"
        ],
        "compass_offsets": [
            "19D14"
        ],
        "eagle_offsets": [
            "19D62"
        ]
    },
    "ACD_UI_Icon_Location_LeaderHouse_Completed_Map.png": {
        "map_offsets": [
            "19E95"
        ],
        "hud_offsets": [
            "19EE9"
        ],
        "compass_offsets": [
            "19F44"
        ],
        "eagle_offsets": [
            "19F92"
        ]
    },
    "ACD_UI_Icon_Location_Port_Map.png": {
        "map_offsets": [
            "1A2DE"
        ],
        "hud_offsets": [
            "1A332"
        ],
        "compass_offsets": [
            "1A38D"
        ],
        "eagle_offsets": [
            "1A3DB"
        ]
    },
    "ACD_UI_Icon_Location_Port_Completed_Map.png": {
        "map_offsets": [
            "1A507"
        ],
        "hud_offsets": [
            "1A55B"
        ],
        "compass_offsets": [
            "1A5B6"
        ],
        "eagle_offsets": [
            "1A604"
        ]
    },
    "ACD_UI_Icon_Location_Quarry_Map.png": {
        "map_offsets": [
            "1A954"
        ],
        "hud_offsets": [
            "1A9A8"
        ],
        "compass_offsets": [
            "1AA03"
        ],
        "eagle_offsets": [
            "1AA51"
        ]
    },
    "ACD_UI_Icon_Location_Quarry_Completed_Map.png": {
        "map_offsets": [
            "1AB7F"
        ],
        "hud_offsets": [
            "1ABD3"
        ],
        "compass_offsets": [
            "1AC2E"
        ],
        "eagle_offsets": [
            "1AC7C"
        ]
    },
    "ACD_UI_Icon_Location_Ruins_Map.png": {
        "map_offsets": [
            "1AFCA"
        ],
        "hud_offsets": [
            "1B01E"
        ],
        "compass_offsets": [
            "1B079"
        ],
        "eagle_offsets": [
            "1B0C7"
        ]
    },
    "ACD_UI_Icon_Location_Ruins_Completed_Map.png": {
        "map_offsets": [
            "1B1F4"
        ],
        "hud_offsets": [
            "1B248"
        ],
        "compass_offsets": [
            "1B2A3"
        ],
        "eagle_offsets": [
            "1B2F1"
        ]
    },
    "ACD_UI_Icon_Location_Arena_Map.png": {
        "map_offsets": [
            "1B63F"
        ],
        "hud_offsets": [
            "1B693"
        ],
        "compass_offsets": [
            "1B6EE"
        ],
        "eagle_offsets": [
            "1B73C"
        ]
    },
    "ACD_UI_Icon_Location_Arena_Completed_Map.png": {
        "map_offsets": [
            "1B869"
        ],
        "hud_offsets": [
            "1B8BD"
        ],
        "compass_offsets": [
            "1B918"
        ],
        "eagle_offsets": [
            "1B966"
        ]
    },
    "ACD_UI_Icon_Location_Dwelling_Map.png": {
        "map_offsets": [
            "1BCBA"
        ],
        "hud_offsets": [
            "1BD0E"
        ],
        "compass_offsets": [
            "1BD69"
        ],
        "eagle_offsets": [
            "1BDB7"
        ]
    },
    "ACD_UI_Icon_Location_Dwelling_Completed_Map.png": {
        "map_offsets": [
            "1BEE7"
        ],
        "hud_offsets": [
            "1BF3B"
        ],
        "compass_offsets": [
            "1BF96"
        ],
        "eagle_offsets": [
            "1BFE4"
        ]
    },
    "ACD_UI_Icon_Location_Temple_Comlpeted_Map.png": {
        "map_offsets": [
            "1C577"
        ],
        "hud_offsets": [
            "1C5CB"
        ],
        "compass_offsets": [
            "1C626"
        ],
        "eagle_offsets": [
            "1C674"
        ]
    },
    "ACD_UI_Icon_Location_Tombs_Map.png": {
        "map_offsets": [
            "1C9C0"
        ],
        "hud_offsets": [
            "1CA14"
        ],
        "compass_offsets": [
            "1CA6F"
        ],
        "eagle_offsets": [
            "1CABD"
        ]
    },
    "ACD_UI_Icon_Location_Tombs_Completed_Map.png": {
        "map_offsets": [
            "1CBE9"
        ],
        "hud_offsets": [
            "1CC3D"
        ],
        "compass_offsets": [
            "1CC98"
        ],
        "eagle_offsets": [
            "1CCE6"
        ]
    },
    "ACD_UI_Icon_Content_BigBattle_Battlefield_Map.png": {
        "map_offsets": [
            "1CE13"
        ],
        "hud_offsets": [
            "1CE67"
        ],
        "compass_offsets": [
            "1CEC2"
        ],
        "eagle_offsets": [
            "1CF10"
        ]
    },
    "ACD_UI_Icon_Content_QuestBoard_Map.png": {
        "map_offsets": [
            "F93C",
            "FD8D"
        ],
        "hud_offsets": [
            "F990",
            "FDE1"
        ],
        "compass_offsets": [
            "F9EB",
            "FE3C"
        ],
        "eagle_offsets": [
            "FA39",
            "FE8A"
        ]
    },
    "ACD_UI_Icon_Content_NationChest_Map.png": {
        "map_offsets": [
            "D1BE",
            "F4FB"
        ],
        "hud_offsets": [
            "D212",
            "F54F"
        ],
        "compass_offsets": [
            "D26D",
            "F5AA"
        ],
        "eagle_offsets": [
            "D2BB",
            "F5F8"
        ]
    }
};

// Assume images = [] and iconOffsets = [] are implemented

const imageContainer = document.getElementById('image-container');

// Clean the image name function
const cleanImageName = (image) => {
    const prefixes = [
        'ACD_UI_Icon_NPC_',
        'ACD_TXT_UI_HUD_BigBattleModule_',
        'ACD_TXT_UI_Icon_NavalPreciseAiming_',
        'ACD_UI_HUD_BigBattleModule_',
        'ACD_UI_HUD_Icon_',
        'ACD_UI_Icon_Content_',
        'ACD_UI_Icon_Location_',
        'ACD_UI_Icon_PlayerBased_',
        'ACD_UI_Icon_',
        'UIIcon_',
        'UI_HUD_FightFeedback_',
        'UI_Icon_'
    ];

    const suffix = '_Map.png';

    prefixes.forEach(prefix => {
        if (image.startsWith(prefix)) {
            image = image.replace(prefix, '');
        }
    });

    if (image.endsWith(suffix)) {
        image = image.slice(0, -suffix.length);
    }

    return image;
};

// Create the images dynamically
images.forEach(image => {
    const div = document.createElement('div');
    div.className = 'image-item';

    const img = document.createElement('img');
    img.src = `Icons/${image}`;
    img.alt = image;

    const title = document.createElement('span');
    title.className = 'image-title';
    title.textContent = cleanImageName(image);

    div.appendChild(img);
    div.appendChild(title);

    // Create a container for checkboxes
    const checkboxContainer = document.createElement('div');
    checkboxContainer.className = 'checkbox-container';

    // Create checkboxes for Map, HUD, Compass, and Eagle
    ['map', 'hud', 'compass', 'eagle'].forEach(type => {
        const checkboxDiv = document.createElement('div');
        checkboxDiv.className = 'checkbox-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = image;
        checkbox.id = `${type}-${cleanImageName(image)}`;

        const checkboxLabel = document.createElement('label');
        checkboxLabel.textContent = type.charAt(0).toUpperCase() + type.slice(1);
        checkboxLabel.setAttribute('for', checkbox.id);

        checkboxDiv.appendChild(checkbox);
        checkboxDiv.appendChild(checkboxLabel);
        checkboxContainer.appendChild(checkboxDiv);
    });

    div.appendChild(checkboxContainer);
    imageContainer.appendChild(div);
});

// Function to generate a random string for PatchID
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = 'HUDCustomizer_UserPreset_';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// Function to get selected visibility type (Hide/Show)
function getVisibilityType() {
    const selectedVisibility = document.querySelector('input[name="visibility"]:checked').value;
    return selectedVisibility === 'hide' ? '00' : '01';
}

// Select all checkboxes of a specific type (map, hud, compass, eagle)
function selectAllByType(type) {
    const checkboxes = document.querySelectorAll(`input[id^="${type}-"]`);
    checkboxes.forEach(checkbox => checkbox.checked = true);
}

// Event listener for the specific select all buttons
document.getElementById('select-all-map-button').addEventListener('click', () => selectAllByType('map'));
document.getElementById('select-all-hud-button').addEventListener('click', () => selectAllByType('hud'));
document.getElementById('select-all-compass-button').addEventListener('click', () => selectAllByType('compass'));
document.getElementById('select-all-eagle-button').addEventListener('click', () => selectAllByType('eagle'));

// Select all checkboxes
document.getElementById('select-all-button').addEventListener('click', () => {
    const checkboxes = imageContainer.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => checkbox.checked = true);
});

// Unselect all checkboxes
document.getElementById('unselect-all-button').addEventListener('click', () => {
    const checkboxes = imageContainer.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => checkbox.checked = false);
});

// Event listener for the submit button
document.getElementById('submit-button').addEventListener('click', () => {
    const selectedOffsets = [];
    const checkboxes = imageContainer.querySelectorAll('input[type="checkbox"]:checked');
    
    // Go through selected checkboxes
    checkboxes.forEach(checkbox => {
        const image = checkbox.value;
        const type = checkbox.id.split('-')[0]; // Extract type: map, hud, compass, eagle
        
        // Fetch the offsets for the image and type
        const offsets = iconOffsets[image][`${type}_offsets`];
        
        // Add the offsets to the selectedOffsets array
        selectedOffsets.push(...offsets);
    });

    // Convert offsets from hex to decimal, sort them, and convert back to hex
    const sortedOffsets = selectedOffsets
        .map(offset => parseInt(offset, 16)) // Convert hex to decimal
        .sort((a, b) => a - b) // Sort in ascending order
        .map(offset => offset.toString(16).toUpperCase()); // Convert back to hex and uppercase

    // Calculate skips
    const skips = sortedOffsets.slice(1).map((offset, index) => {
        return parseInt(offset, 16) - (parseInt(sortedOffsets[index], 16) + 1);
    });

    // Get the selected visibility type (Hide or Show)
    const visibilityType = getVisibilityType(); // "00" for Hide, "01" for Show

    // Generate the JSON output
    const presetTitle = `Preset - ${document.getElementById('preset-title').value}` || "Preset - Untitled";
    const presetDescription = document.getElementById('preset-description').value || "Paste Your Preset Here";
    const patchID = `HUDCustomizer_UserPreset_${Math.random().toString(36).substr(2, 9)}`;
    const startingHex = sortedOffsets[0] || "00"; // Handle case where no offsets are selected

    const jsonOutput = {
        "PatchTitle": presetTitle,
        "PatchDescription": presetDescription,
        "PatchID": patchID,
        "PatchVersion": 1,
        "Targets": [
            {
                "File": "DataPC_patch_01.forge",
                "FileID": 69568652640,
                "Edits": [
                    {
                        "OffsetHex": startingHex,
                        "RunCount": skips.length + 1, // Length of skips + 1
                        "Skip": skips,
                        "Data": visibilityType // Set "Data" based on Hide/Show selection
                    }
                ]
            }
        ]
    };

    // Display the JSON output in the modal
    document.getElementById('json-output').textContent = JSON.stringify(jsonOutput, null, 2);
    document.getElementById('json-modal').style.display = "block";
});

// Close the modal
document.querySelector('.close-button').addEventListener('click', () => {
    document.getElementById('json-modal').style.display = "none";
});

// Close modal on window click
window.addEventListener('click', (event) => {
    const modal = document.getElementById('json-modal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Event listener for the copy button
document.getElementById('copy-button').addEventListener('click', () => {
    // Get the JSON output text
    const jsonOutputText = document.getElementById('json-output').textContent;

    // Use the Clipboard API to copy the text
    navigator.clipboard.writeText(jsonOutputText)
        .then(() => {
            // Optional: Inform the user that the text has been copied
            alert("Copied to clipboard!");
        })
        .catch(err => {
            console.error("Failed to copy: ", err);
        });
});