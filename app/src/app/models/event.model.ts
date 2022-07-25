import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class event {
  @JsonProperty('eventName', String, true)
  public eventName: string = undefined;

  @JsonProperty('videoUrl', String, true)
  public videoUrl: string = undefined;

  @JsonProperty('imageUrl', String, true)
  public imageUrl: string = undefined;

  @JsonProperty('entryFee', Number, true)
  public entryFee: number = undefined;

  @JsonProperty('description', String, true)
  public description: string = undefined;

  @JsonProperty('street', String, true)
  public street: string = undefined;

  @JsonProperty('suburb', String, true)
  public suburb: string = undefined;

  @JsonProperty('city', String, true)
  public city: string = undefined;

  @JsonProperty('code', Number, true)
  public code: number = undefined;

  @JsonProperty('time', String, true)
  public time: string = undefined;

  @JsonProperty('date', Date, true)
  public date: Date = undefined;

}