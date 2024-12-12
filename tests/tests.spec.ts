import { test, expect } from '@playwright/test';

test('Create a new post', async ({request}) => {
  const newPost = await request.post(`/posts`, {
    data: {
      id: 1,
      title: 'post 1',
      body: 'Body for post 1',
      userId: 1
    }
  });
  console.log('newPostJson', )
  expect(newPost.statusText()).toBe('Created');
  expect(newPost.status()).toBe(201);
});

test('Update an existing post', async ({request}) => {
  const newPost = await request.put(`/posts/1`, {
    data: {
      id: 1,
      title: 'post 2',
      body: 'Body for post 2',
      userId: 1
    }
  });
  console.log('newPostJson', )
  expect(newPost.statusText()).toBe('OK');
  expect(newPost.status()).toBe(200);
});

