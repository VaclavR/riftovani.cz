import * as NavActions from './nav.actions';
import { NavItem } from '../models/nav-item.model';
import { navItems } from '../data/nav-items.data';
import { WorkItem } from '../models/work-item.model';
import { workItems } from '../data/work-items.data';

export interface State {
  navItems: NavItem[];
  workItems: WorkItem[];
  showForm: boolean;
}

const initialState = {
  navItems: navItems,
  workItems: workItems,
  showForm: false
};

export function NavReducer(state = initialState, action: NavActions.NavActions) {
  switch (action.type) {
    case (NavActions.SHOW_FORM):
      state.showForm = action.payload;
      return {
        ...state
      };

    default:
      return state;
  }
}
