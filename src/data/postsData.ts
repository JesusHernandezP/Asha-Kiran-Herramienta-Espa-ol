/**
 * Posts system with localStorage persistence.
 * Teachers can create, read, and delete posts without authentication.
 */
import type { Level } from './content';

export type PostCategory = 'lectura' | 'video' | 'audio' | 'imagen' | 'general';

export interface TeacherPost {
  id: string;
  title: string;
  content: string;
  category: PostCategory;
  level?: Level;
  author: string;
  createdAt: string;
  imageUrl?: string;
  videoUrl?: string;
  audioUrl?: string;
  tags: string[];
}

const STORAGE_KEY = 'vinculos_teacher_posts';

export function getPosts(): TeacherPost[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return [];
    return JSON.parse(data) as TeacherPost[];
  } catch {
    return [];
  }
}

export function getPostsByCategory(category: PostCategory): TeacherPost[] {
  return getPosts().filter(p => p.category === category);
}

export function getPostsByLevel(level: Level): TeacherPost[] {
  return getPosts().filter(p => p.level === level);
}

export function getRecentPosts(count = 3): TeacherPost[] {
  return getPosts()
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, count);
}

export function savePost(post: TeacherPost): void {
  const posts = getPosts();
  const existingIndex = posts.findIndex(p => p.id === post.id);
  if (existingIndex >= 0) {
    posts[existingIndex] = post;
  } else {
    posts.unshift(post);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

export function deletePost(id: string): void {
  const posts = getPosts().filter(p => p.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

export function generatePostId(): string {
  return `post_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}
