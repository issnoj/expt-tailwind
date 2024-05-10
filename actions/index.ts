'use server';

import { revalidatePath } from 'next/cache';

export async function doSomething() {
  revalidatePath('/', 'layout');
  console.log('doSomething');
  return { success: true };
}
