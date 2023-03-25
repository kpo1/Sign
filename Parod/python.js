def determine_periodontitis_stage(CAL, RBL, tooth_loss):
    stage = 1
    if CAL >= 5 mm or RBL >= 2 mm:
        stage = 2
    if CAL >= 7 mm or RBL >= 5 mm:
        stage = 3
    if CAL >= 10 mm or RBL >= 7 mm:
        stage = 4
    if tooth_loss > 0:
        stage += 1
    if CAL >= 5 mm and RBL >= 2 mm:
        stage += 1
    return stage

CAL = float(input("Enter clinical attachment loss (mm): "))
RBL = float(input("Enter radiographic bone loss (mm): "))
tooth_loss = int(input("Enter number of teeth lost due to periodontitis: "))

stage = determine_periodontitis_stage(CAL, RBL, tooth_loss)
print("Periodontitis stage:", stage)
