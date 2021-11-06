import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import TestRenderer  from 'react-test-renderer';
import Home from './Home';
import { ITEM_API_URL } from '../api/HomeAPI';

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

test('Home should be rendered', () => {
    const component = TestRenderer.create(<Home/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test("should fetch data", async () => {
    const fakeItems = {
        "items": [
            {
                "id": "1",
                "title": "title1",
                "description": "description1",
                "category": "Programs, Company",
                "link": "http://www.google.com.au",
                "featured": "true"
            },
            {
                "id": "2",
                "title": "title2",
                "category": "description2",
                "link": "http://www.google.com.au",
                "featured": "false"
            },
        ]
    };
    const promiseMock = new Promise<any>((resolve) => {
        resolve({
          json: () => Promise.resolve(fakeItems)
        })
    });

    global.fetch = jest.fn().mockImplementation(() => promiseMock);
  
    await act(async () => {
      render(<Home />, container);
    });
  
    // first item
    expect(container.querySelectorAll(".card-title")[0].textContent).toBe(fakeItems.items[0].title);
    expect(container.querySelectorAll(".description")[0].textContent).toBe(fakeItems.items[0].description);
    expect(container.querySelectorAll(".featured .card-title")[0].textContent).toBe(fakeItems.items[0].title);
    // second item
    expect(container.querySelectorAll(".card-title")[1].textContent).toBe(fakeItems.items[1].title);

    delete global.fetch
});

test("should return error message when fetch is rejected", async () => {
    const promiseMock = new Promise<any>((resolve, reject) => {
        reject('fake error')
    });

    global.fetch = jest.fn().mockImplementation(() => promiseMock);
  
    await act(async () => {
      render(<Home />, container);
    });

    expect(fetch).toHaveBeenCalledWith(ITEM_API_URL);
    expect(fetch).rejects.toMatch('fake error');
    delete global.fetch
});