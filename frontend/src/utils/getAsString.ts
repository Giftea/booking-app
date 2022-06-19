export function getAsString(value: string | string[] | number | number[]): string|number {
    if (Array.isArray(value)) {
      return value[0];
    }
    return value;
  }
  