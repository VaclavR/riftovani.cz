import * as NavActions from './nav.actions';
import { NavItem } from '../../shared/models/nav-item.model';
import { navItems } from '../../shared/data/nav-items.data';
import { WorkItem } from '../../shared/models/work-item.model';
import { workItems } from '../../shared/data/work-items.data';

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

    case (NavActions.SAVE_SUBSCRIBED_INPUTS):
      return {
        ...state
      };

    default:
      return state;
  }
}
