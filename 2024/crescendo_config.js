var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2024 - INTO THE DEEP",
  "page_title": "Oakton Robotics",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials", "code": "s", "type": "scouter", "size": 5, "maxSize": 5, "required": "true" },
    { "name": "Event", "code": "e", "type": "event", "defaultValue": "", "required": "true" },
    { "name": "Match Level", "code": "l", "type": "level", "choices": { "qm": "Quals<br>", "sf": "Semifinals<br>", "f": "Finals" }, "defaultValue": "qm", "required": "true" },
    { "name": "Match #", "code": "m", "type": "match", "min": 1, "max": 150, "required": "true" },
    { "name": "Robot", "code": "r", "type": "robot", "choices": { "r1": "Red-1", "b1": "Blue-1<br>", "r2": "Red-2", "b2": "Blue-2<br>", "r3": "Red-3", "b3": "Blue-3" }, "required": "true" },
    { "name": "Team #", "code": "t", "type": "team", "min": 1, "max": 99999 },
    { "name": "Auto Start Position", "code": "as", "type": "clickable_image", "filename": "2024/field_image.png", "clickRestriction": "one", "allowableResponses": "1 12 13 24 25 36 37 48 49 60 61 72", "shape": "circle 5 black red true" }
  ],
  "auton": [
    { "name": "Leave Starting Zone", "code": "al", "type": "bool" },
    { "name": "Park in Observation Zone", "code": "aoz", "type": "bool" },
    { "name": "Sample - Net Zone", "code": "asn", "type": "bool" },
    { "name": "Sample - Low Basket", "code": "alb", "type": "counter" },
    { "name": "Sample - High Basket", "code": "ahb", "type": "counter" }
  ],
  "teleop": [
    { "name": "Park in Observation Zone", "code": "toz", "type": "bool" },
    { "name": "Sample - Net Zone", "code": "tsn", "type": "bool" },
    { "name": "Sample - Low Basket", "code": "tlb", "type": "counter" },
    { "name": "Sample - High Basket", "code": "thb", "type": "counter" },
    { "name": "Specimen - Low Chamber", "code": "tslc", "type": "counter" },
    { "name": "Specimen - High Chamber", "code": "tshc", "type": "counter" }
  ],
  "endgame": [
    { "name": "Ascent Le vel 1", "code": "al1", "type": "bool" },
    { "name": "Ascent Level 2", "code": "al2", "type": "bool" },
    { "name": "Ascent Level 3", "code": "al3", "type": "bool" }
  ],
  "postmatch": [
    { "name": "Match Outcome", "code": "mo", "type": "radio", "choices": { "w": "Win<br>", "t": "Tie<br>", "l": "Loss" }, "defaultValue": "l" },
    { "name": "Driver Skill", "code": "ds", "type": "radio", "choices": { "n": "Not Effective<br>", "a": "Average<br>", "v": "Very Effective<br>", "x": "Not Observed" }, "defaultValue": "x" },
    { "name": "Defense Rating", "code": "dr", "type": "radio", "choices": { "b": "Below Average<br>", "a": "Average<br>", "g": "Good<br>", "e": "Excellent<br>", "x": "Did not play defense" }, "defaultValue": "x" },
    { "name": "Speed Rating", "code": "sr", "type": "radio", "choices": { "1": "1 (slow)<br>", "2": "2<br>", "3": "3<br>", "4": "4<br>", "5": "5 (fast)" }, "defaultValue": "3" },
    { "name": "Died/Immobilized", "code": "die", "type": "bool" },
    { "name": "Tippy<br>(almost tipped over)", "code": "tip", "type": "bool" },
    { "name": "Dropped Notes (>2)", "code": "dn", "type": "bool" },
    { "name": "Make good<br>alliance partner?", "tooltip": "Would you want this robot on your alliance in eliminations?", "code": "all", "type": "bool" },
    { "name": "Comments", "code": "co", "type": "text", "size": 55, "maxSize": 100 }
  ]
}`;
