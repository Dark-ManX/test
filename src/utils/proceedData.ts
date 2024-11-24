export const proceedData = async (
    body: ReadableStream,
    type: 'getModels' | '' = ''
) => {
    const reader = body.getReader();
    const { value } = await reader!.read();
    const readResponse = new TextDecoder().decode(value);

    if (!type) {
        return JSON.parse(readResponse).Results;
    }

    const parser = new DOMParser();
    const doc = parser.parseFromString(readResponse, 'application/xml');
    const result = doc.getElementsByTagName('VehicleTypesMakes');
    return Array.from(result).reduce((acc: unknown[], el) => {
        const obj: any = {};

        const arr: ChildNode[] = Array.from(el.childNodes);
        obj[arr[0].textContent as string] = arr[1].textContent;
        acc.push(obj);

        return acc;
    }, []);
    //   return Array.from(result);
};
