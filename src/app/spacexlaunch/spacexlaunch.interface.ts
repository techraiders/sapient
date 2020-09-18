interface Links {
  mission_patch: string;
  mission_patch_small: string;
}

interface Core {
  land_success: boolean;
}

interface FirstStage {
  cores: Array<Core>;
}

interface Rocket {
  first_stage: FirstStage;
}
