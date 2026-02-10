export interface UploadedFile {
    name: string;
    type: string;
    data: any[];
    text: string;
    folder: string;
    path?: string;
}

export interface TargetOption {
    label: string;
    value: string;
    type?: string;
}

export interface TransformationParam {
    key: string;
    label: string;
    type: 'text' | 'number' | 'boolean' | 'select' | 'textarea' | 'color';
    placeholder?: string;
    options?: string[];
}

export interface TransformationConfig {
    label: string;
    params: TransformationParam[];
    example: () => {
        input: string;
        output: string;
        context: string;
    };
}

export interface TransformationStep {
    id: number;
    transformation: string;
    params: Record<string, any>;
}

export interface MappingRow {
    id: number;
    dataset: string;
    sourceElement: string;
    targetElement: string | null;
    status: 'attention' | 'complete';
    steps: TransformationStep[];
    selectedStepId: number | null;
}
