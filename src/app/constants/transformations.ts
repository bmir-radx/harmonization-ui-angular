import { TransformationConfig } from '../models/mapping.model';

export const PRIMITIVE_CONFIGS: Record<string, TransformationConfig> = {
    'bin': {
        label: 'Bin',
        params: [
            { key: 'bins', label: 'Bins (JSON)', type: 'textarea', placeholder: '[{"label": 1, "start": 0, "end": 10}]' }
        ],
        example: () => ({
            input: `5`,
            output: `1`,
            context: `bins: [{label: 1, start: 0, end: 10}]`
        })
    },
    'cast': {
        label: 'Cast',
        params: [
            { key: 'target', label: 'Target Type', type: 'select', options: ['integer', 'string', 'decimal', 'boolean', 'float'] }
        ],
        example: () => ({
            input: `"123"`,
            output: `123`,
            context: `target: 'integer'`
        })
    },
    'convert_date': {
        label: 'Convert Date',
        params: [
            { key: 'source_format', label: 'Source Format', type: 'text', placeholder: '%Y-%m-%d' },
            { key: 'target_format', label: 'Target Format', type: 'text', placeholder: '%m/%d/%Y' }
        ],
        example: () => ({
            input: `"2020-01-01"`,
            output: `"01/01/2020"`,
            context: `format: %Y-%m-%d -> %m/%d/%Y`
        })
    },
    'convert_units': {
        label: 'Convert Units',
        params: [
            { key: 'source_unit', label: 'Source Unit', type: 'text', placeholder: 'meters' },
            { key: 'target_unit', label: 'Target Unit', type: 'text', placeholder: 'feet' }
        ],
        example: () => ({
            input: `1`,
            output: `3.28084`,
            context: `meters -> feet`
        })
    },
    'enum_to_enum': {
        label: 'Enum To Enum',
        params: [
            { key: 'mapping', label: 'Mapping (JSON)', type: 'textarea', placeholder: '{"A": "B", "1": "2"}' },
            { key: 'default', label: 'Default Value', type: 'text', placeholder: 'Optional' },
            { key: 'strict', label: 'Strict', type: 'boolean' }
        ],
        example: () => ({
            input: `"A"`,
            output: `"B"`,
            context: `mapping: {"A": "B"}`
        })
    },
    'format_number': {
        label: 'Format Number',
        params: [
            { key: 'precision', label: 'Precision', type: 'number', placeholder: '2' }
        ],
        example: () => ({
            input: `10.567`,
            output: `"10.57"`,
            context: `precision: 2`
        })
    },
    'normalize_text': {
        label: 'Normalize Text',
        params: [
            { key: 'normalization', label: 'Normalization', type: 'select', options: ['strip', 'lower', 'upper', 'remove_accents', 'remove_punctuation', 'remove_special_characters'] }
        ],
        example: () => ({
            input: `" Hello "`,
            output: `"hello"`,
            context: `strip, lower`
        })
    },
    'offset': {
        label: 'Offset',
        params: [
            { key: 'offset', label: 'Offset Value', type: 'number', placeholder: '5' }
        ],
        example: () => ({
            input: `10`,
            output: `15`,
            context: `offset: 5`
        })
    },
    'reduce': {
        label: 'Reduce',
        params: [
            { key: 'reduction', label: 'Reduction Strategy', type: 'select', options: ['mean', 'sum', 'min', 'max'] }
        ],
        example: () => ({
            input: `[1,2,3]`,
            output: `2`,
            context: `using mean`
        })
    },
    'round': {
        label: 'Round',
        params: [
            { key: 'precision', label: 'Precision', type: 'number', placeholder: '0' }
        ],
        example: () => ({
            input: `10.5`,
            output: `11`,
            context: `precision: 0`
        })
    },
    'scale': {
        label: 'Scale',
        params: [
            { key: 'scaling_factor', label: 'Scaling Factor', type: 'number', placeholder: '1.5' }
        ],
        example: () => ({
            input: `10`,
            output: `15`,
            context: `factor: 1.5`
        })
    },
    'substitute': {
        label: 'Substitute',
        params: [
            { key: 'expression', label: 'Regex Expression', type: 'text', placeholder: 'pattern' },
            { key: 'substitution', label: 'Replacement', type: 'text', placeholder: 'replacement' }
        ],
        example: () => ({
            input: `"Hello World"`,
            output: `"Hi World"`,
            context: `s/Hello/Hi/`
        })
    },
    'threshold': {
        label: 'Threshold',
        params: [
            { key: 'lower', label: 'Lower Bound', type: 'number', placeholder: '0' },
            { key: 'upper', label: 'Upper Bound', type: 'number', placeholder: '100' }
        ],
        example: () => ({
            input: `150`,
            output: `100`,
            context: `bounds: [0, 100]`
        })
    },
    'truncate': {
        label: 'Truncate',
        params: [
            { key: 'max_length', label: 'Max Length', type: 'number', placeholder: '10' }
        ],
        example: () => ({
            input: `"Long string"`,
            output: `"Long st..."`,
            context: `max: 8`
        })
    }
};
