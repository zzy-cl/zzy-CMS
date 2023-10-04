import { defineStore } from 'pinia'
import type { RouteLocationNormalized } from 'vue-router'

export interface TagView extends Partial<RouteLocationNormalized> {
  title?: string
}

export const useTagsViewStore = defineStore('TagsView', {
  state: () => ({
    visitedViews: [] as TagView[],
    cachedViews: [] as string[]
  }),
  actions: {
    /**
     * 添加已经访问过的 view
     * @param view
     */
    addVisitedView(view: TagView) {
      // 如果已经包含了这个路由了直接返回
      if (this.visitedViews.some((v: TagView): boolean => v.path === view.path)) return
      if (view.meta && view.meta.affix) {
        // 将新的 view 添加到 visitedViews 的开头
        this.visitedViews.unshift(Object.assign({}, view, { title: view.meta.title || 'no-name' }))
      } else {
        // 将新的 view 添加到 visitedViews 的结尾
        this.visitedViews.push(Object.assign({}, view, { title: view.meta?.title || 'no-name' }))
      }
    },
    /**
     * 添加缓存 view 的名字
     * @param view
     */
    addCachedView(view: TagView) {
      const viewName = view.name as string
      if (this.cachedViews.some((v: string) => v === viewName)) return
      if (view.meta?.keepAlive) {
        this.cachedViews.push(viewName)
      }
    },
    /**
     * 删除已经访问过的 view
     * @param view
     */
    delVisitedView(view: TagView) {
      return new Promise((resolve) => {
        for (const [key, v] of this.visitedViews.entries()) {
          if (v.path === view.path) {
            this.visitedViews.splice(key, 1)
            break
          }
        }
        resolve([...this.visitedViews])
      })
    },
    /**
     * 删除缓存 view 的名字
     * @param view
     */
    delCachedView(view: TagView) {
      const viewName = view.name as string
      return new Promise((resolve) => {
        const index = this.cachedViews.indexOf(viewName)
        index > -1 && this.cachedViews.splice(index, 1)
        resolve([...this.cachedViews])
      })
    },
    /**
     *
     * @param view
     */
    delOtherVisitedViews(view: TagView) {
      return new Promise((resolve) => {
        this.visitedViews = this.visitedViews.filter((v) => {
          return v.meta?.affix || v.path === view.path
        })
        resolve([...this.visitedViews])
      })
    },
    delOtherCachedViews(view: TagView) {
      const viewName = view.name as string
      return new Promise((resolve) => {
        const index = this.cachedViews.indexOf(viewName)
        if (index > -1) {
          this.cachedViews = this.cachedViews.slice(index, index + 1)
        } else {
          this.cachedViews = []
        }
        resolve([...this.cachedViews])
      })
    }
  }
})
