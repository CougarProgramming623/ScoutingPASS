  "dataFormat": "tsv",
  "title": "Scouting PASS 2024 - INTO THE DEEP",
  "page_title": "Crescendo",
  "pitConfig": "true",
  "prematch": [
    { "name": "Team Number", "code": "t", "type": "number" },
    { "name": "Width (inches)", "code": "wid", "type": "number", "defaultValue": "0" },
    { "name": "Weight (lbs)", "code": "wei", "type": "number", "defaultValue": "0" },
    { "name": "Drivetrain", "code": "drv", "type": "radio", "choices": {
        "s": "Swerve<br>",
        "w": "West Coast/Tank<br>",
        "b": "Butterfly/Grasshopper<br>",
        "m": "Mechanum<br>",
        "o": "Other"
      }, "defaultValue": "o"
    },
    { "name": "Other Drivetrain", "code": "odt", "type": "text", "size": 20, "maxSize": 50 },
    { "name": "Swerve Gear Ratio", "code": "sr", "type": "radio", "choices": {
        "1": "L1 (8.14:1)<br>",
        "2": "L2 (6.75:1)<br>",
        "3": "L3 (6.12:1)<br>",
        "4": "L4 (5.14:1)<br>",
        "o": "Other (specify in comments)<br>",
        "x": "Not Swerve"
      }, "defaultValue": "x"
    },
    { "name": "Drivetrain Motor Type", "code": "mot", "type": "radio", "choices": {
        "n": "Neo<br>",
        "f": "Falcon<br>",
        "c": "CIM<br>",
        "x": "Other<br>"
      }, "defaultValue": "x"
    },
    { "name": "Number of Batteries", "code": "nob", "type": "number" },
    { "name": "Battery Type", "code": "bty", "type": "radio", "choices": {
        "a": "AndyMark Flat Pack<br>",
        "g": "goBILDA 12V NiMH Nested<br>",
        "m": "Matrix 12V 3000mAh NiMH<br>",
        "r": "REV 12V Slim<br>",
        "s": "Studica 12V 3000mAh NiMH<br>",
        "t": "TETRIX MAX 12V NiMH<br>",
        "o": "Other (specify in comments)"
      }
    },
    { "name": "Floor Pickup Capability", "code": "fpu", "type": "bool" },
    { "name": "Autonomous Actions", "code": "aut", "type": "text", "size": 20, "maxSize": 250 },
    { "name": "Scouting Method / Program", "code": "sct", "type": "text", "size": 20, "maxSize": 250 },
    { "name": "Comments", "code": "co", "type": "text", "size": 20, "maxSize": 250 }
  ],
  "auton": [],
  "teleop": [],
  "endgame": [],
  "postmatch": []
}`;

