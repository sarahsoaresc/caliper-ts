import { JsonLdContextVersion } from '../../config/config';
import { Entity, createEntity } from '../entity';
import { EntityType } from '../entityType';

export type Person = {} & Entity;

export type PersonParams = Omit<Person, '@context' | 'type'>;

export function createPerson(delegate: PersonParams, contextVersion: JsonLdContextVersion = JsonLdContextVersion.none): Person {
	return createEntity<Person>({ ...delegate, type: EntityType.Person }, contextVersion);
}
