"""empty message

Revision ID: a66f3c8d634f
Revises: 2ced63bc578c
Create Date: 2019-03-21 22:29:51.028499

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a66f3c8d634f'
down_revision = '2ced63bc578c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('pastes', sa.Column('username', sa.String(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('pastes', 'username')
    # ### end Alembic commands ###
