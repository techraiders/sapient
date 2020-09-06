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

export interface SpacexLaunch {
    mission_name: string;
    flight_number: number;
    mission_id: Array<string>;
    links: Links;
    launch_year: string;
    launch_success: boolean;
    rocket: Rocket;
}