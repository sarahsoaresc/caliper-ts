import Caliper from './../Caliper';
import { ISystemIdentifier } from './../SystemIdentifier';
import { IAttempt } from './Attempt';
import { EntityType } from './EntityType';
import { IResponse } from './Response';

export interface IMultipleChoiceResponse extends IResponse {
	id: string;
	value?: string;
}

interface IMultipleChoiceResponseParams {
	id: string;
	value?: string;
	attempt?: IAttempt;
	startedAtTime?: string;
	endedAtTime?: string;
	duration?: string;
	name?: string;
	description?: string;
	dateCreated?: string;
	dateModified?: string;
	otherIdentifiers?: ISystemIdentifier[];
	extensions?: Record<string, any>;
}

export function MultipleChoiceResponse(params: IMultipleChoiceResponseParams): IMultipleChoiceResponse {
	return {
		type: EntityType.MultipleChoiceResponse,
		...params
	};
}